import React from 'react'

import {Route, Routes} from "react-router-dom";

import Home from './home';
import Menu from './menu';
import Hist from './history';
import About from './about';
import Notfound from './notfound';

function App() {
  return (
    <div>
      <Home />
    <Routes>
      <Route exat path = "/" Component={Menu}/>
      <Route exat path = "/about" Component={About}/>
      <Route exat path = "/history" Component={Hist}/>
      <Route path = "*" Component={Notfound}/>
    </Routes>
    </div>
  )
}

export default App