import React, { useEffect } from 'react';
import { Router, Routes, Route, useNavigate } from "react-router-dom";
import { authService } from './firebase';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'; 

import Layout from './components/common/layout/Layout';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Guide from './pages/Guide';
import Todo from './pages/Todo';
import Overview from './pages/Overview';
import { setIsLoggedin, setUserId } from './modules/authReducer';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        dispatch(setIsLoggedin(true));
        navigate('/');
        dispatch(setUserId(user.uid));
      } else {
        dispatch(setIsLoggedin(false));
        navigate('/auth');
        dispatch(setUserId(''));
      }
    });
  }, []);
  
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
