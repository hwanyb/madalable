import React from 'react';
import { Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components'; 

import Layout from './components/common/layout/Layout';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Guide from './pages/Guide';
import Todo from './pages/Todo';
import Overview from './pages/Overview';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/guide' element={<Guide />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/auth' element={<Auth />} />
    </Routes>
  );
}

export default App;
