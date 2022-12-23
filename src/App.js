import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Edit from './components/Edit';
import MarkDown from './components/MarkDown'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home';

function App() {
  const [value,setValue]=useState('')
  console.log(value)
  return (
    <>
    <section className='body_div'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<Edit value={value} setValue={setValue} />} />
        <Route path='/markdown' element={<MarkDown value={value}/>}/>
    </Routes>


    </section>


    
    </>
  );
}

export default App;
