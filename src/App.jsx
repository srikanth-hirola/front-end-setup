/* eslint-disable no-unused-vars */
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './sass/main.scss'
import LayoutComponent from './layout/LayoutComponent';
const App = () => {
  return (
    <Router>
      <LayoutComponent />
    </Router>
  );
};

export default App;
