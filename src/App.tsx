import './App.css'
import * as React from 'react';
import {Route, Routes} from 'react-router-dom';
import Appbar from './components/Appbar/Appbar';
import MainPage from './components/MainPage/MainPage';
import AddQuote from './components/AddQuote/AddQuote';
import EditQuote from './components/EditQuote/EditQuote';

const App: React.FC = () => {

  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/add' element={<AddQuote/>}/>
          {/*<Route path="/quota/:id" element={<MainPage/>} />*/}
          <Route path="/quotes/:id" element={<EditQuote/>} />
          <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
