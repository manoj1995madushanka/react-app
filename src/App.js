import "./App.css";
import { useEffect, useState } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} />
    </div>
  );
}

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/manoj1995madushanka`)
      .then((response) => response.json())
      .then(setData)
      .then(()=> setLoading(false))
      .catch(setError);
  }, []) // empty array means only one time(stating time) fetching data

  if(loading) return <h1>Loading...</h1>
  if(error){
    return <pre>{JSON.stringify(error)}</pre>
  }
  if(!data) return null;

  if (data) {
    return (
      <GithubUser
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      ></GithubUser>
    );
  }

  return (
    <h1>Data</h1>
  );
}

export default App;
