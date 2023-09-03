import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, About, Contact, History } from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>} />
      <Route path='/about' element={<About></About>}>
        <Route path='history' element={<History></History>}></Route>
      </Route>
      <Route path='/contact' element={<Contact></Contact>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


