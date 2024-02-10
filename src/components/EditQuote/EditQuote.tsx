import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Params, Quote} from '../../types';


const EditQuote: React.FC = () => {
  const { id } = useParams<Params>();
  const [quoteData, setQuoteData] = useState<Quote>({
    id: '',
    category: '',
    author: '',
    text: '',
  });


  return (
    <div>


    </div>
  );
};

export default EditQuote;
