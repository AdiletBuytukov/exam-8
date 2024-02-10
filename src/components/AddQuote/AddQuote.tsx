import React, {useState} from 'react';
import {Quote} from '../../types';
import axiosApi from '../../axiosApi';

const NewQuote: React.FC = () => {
  const [quoteData, setQuoteData] = useState<Quote>({
    id: '',
    category: '',
    author: '',
    text: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addQuote(quoteData);
      window.location.href = '/';
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuoteData({
      ...quoteData,
      [e.target.name]: e.target.value,
    });
  };

  const addQuote = async (quote: Omit<Quote, 'id'>): Promise<void> => {
    try {
      await axiosApi.post('/quotes.json', quote);
    } catch (error) {
      throw new Error('Failed to add quote');
    }
  };

  return (
    <div  className='form-control'>
      <h2>Добавить новую цитату</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Category:
            <input
              name='category'
              className='form-control'
              type="text"
              value={quoteData.category}
              onChange={handleChange} />

          </label>
        </div>
        <div>
          <label>
            Author:
            <input
              name='author'
              className='form-control'
              type="text"
              value={quoteData.author}
              onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Text:
            <textarea
              name='text'
              className='form-control'
              value={quoteData.text}
              onChange={handleChange} />
          </label>
        </div>
        <button type="submit" className='btn btn-success'>Отправить</button>
      </form>
    </div>
  );
};

export default NewQuote;