import './App.css';
import { useState } from 'react';

function App({library}) {

  const [emotion,setEmotion]=useState("Happy");

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={()=>setEmotion("Sad")}>Sad</button>
    </div>
  );
}

export default App;
