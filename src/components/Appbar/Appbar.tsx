import React from 'react';
import {NavLink} from 'react-router-dom';

const Appbar: React.FC = () => {
  return (
    <nav>
      <div className='container-fluid d-flex flex-row justify-content-between'>
        <section>
          <h4>Quotes Central</h4>
        </section>
        <section className='d-flex gap-2'>
          <NavLink to='/'>Quotes</NavLink>
          <NavLink to='/add'>Submit new quote</NavLink>
        </section>
      </div>
    </nav>
  );
};

export default Appbar;