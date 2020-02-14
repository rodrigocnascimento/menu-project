import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [testApiResponse, setTestApiResponse] = useState("")
  const { env } = props
  
  useEffect(() => {
    fetch(`${env.URI}/clients`)
      .then(async response => {
        setTestApiResponse(await response.text())
      })
      .catch(err => err);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">{testApiResponse}</p>
      </header>
    </div>
  );
}

export default App;
