import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Layout from './components/Layout/Layout'
import LItem from './components/UI/LItem/LItem';
import Button from './components/UI/Button/Button';

function App() {

  const [myData, setMyData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/?page='+page)
      .then(result => {
        setMyData(result.data.results);
      });
  }, [page])

  const nextPage = () => {
    if (page < 42) {
      setPage(page + 1)
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  console.log(page);

  return (
    <Layout>
      {myData.map(elements => (
        // <h2 key={elements.id} >{elements.name}</h2>
        <LItem key={elements.id} data={[elements.name, elements.status]} img={elements.image} />
      ))}
      <div className='btns'>
        <Button text='Prev' click={prevPage} />
        <h1>{page}</h1>
        <Button text='Next' click={nextPage} />
      </div>
    </Layout>
  );
}

export default App
