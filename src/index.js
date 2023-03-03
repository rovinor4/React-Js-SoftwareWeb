import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './page/Home';
import Price from './page/Price';
import Download from './page/Download';
import News from './page/News';
import NewsShow from './page/News-show';
import NoPage from './page/NotPage';
import AdminLogin from './admin/Login';
import AdminHome from './admin/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/price" element={<Price />}/>
      <Route path="/download" element={<Download />}/>
      <Route path="/news" element={<News />}/>
      <Route path="/news/*" element={<NewsShow />}/>
      <Route path='admin'>
        <Route index element={<AdminLogin />}/>
        <Route path="Home" element={<AdminHome/>}/>
      </Route>

      <Route path="*" element={<NoPage />} />
    </Routes>
    

    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
