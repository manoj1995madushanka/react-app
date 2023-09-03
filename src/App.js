import './App.css';
import { useState,useEffect } from 'react';

function App({library}) {

  const [emotion,setEmotion]=useState("Happy");
  const [secondary,setSecondary] = useState("Energy");

  useEffect(()=>{
    console.log(`I am ${emotion} right now.`);
  },[emotion,secondary]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={()=>setEmotion("Sad")}>Sad</button>
    </div>
  );
}

export default App;
