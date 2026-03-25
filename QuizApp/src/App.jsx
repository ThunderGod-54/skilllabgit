import React, { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import {Route, Routes} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import Quiz from './components/Quiz';
export default function App() {
  //const [count, setCount]= useState(0);
  //const [state,setState] = useState({count:0, clicks: 0})
  // const [items,setItems] = useState([]);
  console.log('App rendered');
  return (
    <div className="App">
      <Quiz/>
    </div>
  );
}
