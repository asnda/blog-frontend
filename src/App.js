import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import FashionPostPage from './components/FashionPostPage';
import BeautyPostPage from './components/BeautyPostPage';
import LifestylePostPage from './components/LifestylePostPage';
import AddNewPostPage from './components/AddNewPostPage';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fashion" element={<FashionPostPage />} />
        <Route path="/beauty" element={<BeautyPostPage />} />
        <Route path="/lifestyle" element={<LifestylePostPage />} />
        <Route path="/new" element={<AddNewPostPage />} />
      </Routes>
    </Router>
  );
};

export default App;