import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './component/Home';
import Login from './component/Login';
import Admin from './component/Admin';
import Menu from './component/Menu';
import Header from './component/Header';
import './App.css'
//import './index.css'
import Layout from './component/Layout';
function App () {
    return(
      <div>
        <Header/>
        <Menu/>
    </div>
    )
  
}
export default App;

























/*import react from 'react'

import Login from './login/Login';
import Main from './main/Main';
import Minu from './Minu';
//import Admin from './Admin';
//import Login from './login/Login';
//import Main from './main/Main'

//import Minu from './Minu';
//import './Style.Admin.css'

function App(){
      return(  
          <div className='container'>
            <Minu/>
         </div>
        );
}

export default App;
*/


/*import raect from 'react'
import reactDOM from 'react-dom'
import {Admin,Resource} from 'react'
import lb4provider from 'react'

function App(){
    return(
        <div>
          <Admin dataprovider={lb4provider('http:/localhost:3000')}>
            <Resource name ='customers'/>
          </Admin>
        </div>
    )
}
export default App;*/