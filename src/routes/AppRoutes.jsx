/* eslint-disable no-unused-vars */
// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Departments from '../components/Departments';
import LayoutComponent from '../layout/LayoutComponent';
import Sample from '../components/sample/Sample';
import Setup from '../modules/setup/Setup';
import Dashboard from '../modules/dashboard';
import Settings from '../modules/settings';

// Define page components here or import them from their respective files
const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Sample />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/settings" element={<Settings />}/>
        {/* <Route index element={<Departments />} /> */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route  path="/setup" element={<Setup />}/>
    </Routes>
  );
};

export default AppRoutes;
