import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import Login from "./component/Login";
import Menu from "./component/Menu";
import Admin from "./component/Admin";
import NoPage from "./component/NoPage";
import './App.css';
import 'react-bootstrap';
import'bootstrap';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="menu" element={<Menu />} />
          <Route path="admin" element={<Admin/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));











/*import React from 'react';
import  ReactDOM ,{render} from 'react-dom';
import App from './App';



ReactDOM.render(<App/>,document.getElementById('root'));*/