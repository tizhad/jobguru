import "./App.css";
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Navbar from "./Components/Navigation/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about-us" component={AboutUs}></Route>
      </Switch>
    </div>
  );
}
