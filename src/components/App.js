import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateUser from './CreateUser';
import '../App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<CreateUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
