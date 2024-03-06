import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState('dark'); // whether dark mode is enabled or not

    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode = 'dark'
    }
      else{
        setMode = 'light'
    }
  }

  return (
    <>
    {/* <Navbar title ="Vlogs123" aboutText="About Us" /> */}
    {/* <Navbar /> */}
    <Navbar title ="Vlogs123" mode={mode} togglemode={togglemode}/>
    <div className="container my-3">
    <TextForm heading="Enter your text below"/>
    </div>
    </>
  );
  }

export default App;
