import "./App.css";
import "./media.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Home from "./components/Home";
import About from "./components/About";
import Cocktail from "./components/Cocktail";
import SingleCocktail from "./components/SingleCocktail";
import Loading from "./components/Loading";
import Error from "./components/Error";

// Navbar
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { useGlobalContext } from "./context";

function App() {
  const { setSidebarActive } = useGlobalContext();
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
