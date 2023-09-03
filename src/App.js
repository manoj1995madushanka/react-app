import './App.css';

// destructuring array
const [firstCity,secondCity]=["Galle","Colombo"];
console.log(firstCity);

function App({library}) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    
    </div>
  );
}

export default App;
