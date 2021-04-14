import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  return (
    <Router>
      {" "}
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
