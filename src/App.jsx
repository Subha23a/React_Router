
import {Route, Routes,Link} from "react-router";
import Home from "./Home";
import About  from "./About";


export default function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>

      {/* <h     1>Welcome to The React_Router</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
      
    </div>
  );
}
