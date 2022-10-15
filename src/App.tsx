import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import LoginView from './views/LoginView/LoginView';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginView />} />
      <Route path='/home' element={<HomeView />} />
    </Routes>
  )
}

export default App