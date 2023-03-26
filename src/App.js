import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  const [token, setToken] = useState()
  if (!token) {
    return <Login setToken={setToken}/>
  }


  
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/profile' element={<Profile/>} /> */}
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
