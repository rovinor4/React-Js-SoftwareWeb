import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./page/Home";
import Price from "./page/Price";
import Download from "./page/Download";
import News from "./page/News";
import NewsShow from "./page/News-show";
import NoPage from "./page/NotPage";
import AdminLogin from "./admin/Login";
import AdminRegister from "./admin/Register";
import AdminHome from "./admin/Home";
import AdminNews from "./admin/News";
import AdminNewsCreate from "./admin/News-Create";
import AdminNewsEdit from "./admin/News-Edit";
import AdminMyAccont from "./admin/MyAccount";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/price" element={<Price />} />
      <Route path="/download" element={<Download />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:slugGet" element={<NewsShow />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/register" element={<AdminRegister />} />
      <Route path="akun">
        <Route index element={<AdminHome />} />
        <Route path="news" element={<AdminNews />} />
        <Route path="news/create" element={<AdminNewsCreate />} />
        <Route path="news/edit/:slugGet" element={<AdminNewsEdit />} />
        <Route path="my-account" element={<AdminMyAccont />} />
      </Route>

      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
