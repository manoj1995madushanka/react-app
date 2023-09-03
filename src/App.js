import "./App.css";
import {Link} from "react-router-dom";

export function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">Abount</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Web</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Abount</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Abount</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home/>
}

