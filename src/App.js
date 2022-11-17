import './App.css';
import { useState } from 'react';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  const [ box, setBox] =useState([
    // {
    //   backgroundColor: 'red',
    //   width: '50px',
    //   heigh: '50px',
    //   margin: '5px'
    // }
  ])
  return (
    <div className="App">
      <Form box={box} setBox = {setBox}/>
      {
        box.map((thebox, index) =>{
          return <List key={index} boxObject={thebox}/>
        })
      }
    </div>
  );
}

export default App;
