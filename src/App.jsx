import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import FeedFooter from './components/feedFooter/FeedFooter';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-[50px]">
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
      <FeedFooter />
    </BrowserRouter>
  )
}

export default App
