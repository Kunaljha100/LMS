import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React, { Component } from 'react';
import './App.css'
import Header from './components/Header';
import BooksList from './pages/BooksList';
import Booksdetail from "./pages/Booksdetail";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddEdit from './pages/AddEdit';
import View from './pages/View';





function App(){
  return(
  
    
    <Router>
      <div className='App'>
    <Header />
    <ToastContainer position="top-center" />
   <Routes>
      <Route path="/" element={<BooksList/>} />
      <Route path="/add" element={<AddEdit/>} />
      <Route path="/update/:id" element={<AddEdit/>} />
      <Route path="/view/:id" element={<View/>} />
      
    </Routes>
   </div>

    </Router>
   
  
  );
}



export default App;
