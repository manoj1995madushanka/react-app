import './App.css';
import { useState,useEffect } from 'react';

function App({library}) {

  const [emotion,setEmotion]=useState("Happy");

  useEffect(()=>{
    console.log(`I am ${emotion} right now.`);
  },[emotion]);

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={()=>setEmotion("Sad")}>Sad</button>
    </div>
  );
}

export default App;
