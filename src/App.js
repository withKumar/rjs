import React from 'react';
//import logo from './logo.svg';
import HelloMessage from './components/box.component';
import HelloButton from './components/button.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <HelloMessage />
      <HelloButton />
    </div>
  );
}

export default App;
