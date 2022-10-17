import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginView from './views/LoginView/LoginView';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginView />} />
    </Routes>
  )
}

export default App