import React, {useState, useEffect} from 'react';
import {Quote} from '../../types';
import {Link} from 'react-router-dom';
import axiosApi from '../../axiosApi';

const MainPage: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);


  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const fetchedQuotes = await getAllQuotes();
        setQuotes(fetchedQuotes);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchQuotes();
  }, []);

  const getAllQuotes = async (): Promise<Quote[]> => {
    try {
      const response = await axiosApi.get('/quotes.json');
      const data: { [key: string]: Quote } = response.data;
      const quotes: Quote[] = Object.keys(data).map(key => ({
        ...data[key],
      }));
      return quotes;
    } catch (error) {
      throw new Error('Error');
    }
  };

  return (
    <div className="page-container">
      <section>
        {quotes.map(quote => (
          <div key={quote.id}>
            <Link to={`/category/${quote.category}`}> "{quote.text}" - Author: {quote.author}</Link>
            <button className='btn btn-primary'>Изменить</button>
            <button className='btn btn-danger'>Удалить</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MainPage;