import "./App.scss";
<<<<<<< HEAD
import Nav from "../src/component/Nav/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
=======
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TutorialPage from "./pages/TutorialPage/TutorialPage";
import GamePage from "./pages/GamePage/GamePage";
>>>>>>> c39383e2a7f3b58c271cd1af28f5c629e54862a9

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Nav>Hello</Nav>
=======
      
      <Switch>
        <Route path="/" exact component={TutorialPage} />
        <Route path="/game" exact component={GamePage} />        
      </Switch>
      
>>>>>>> c39383e2a7f3b58c271cd1af28f5c629e54862a9
    </BrowserRouter>
  );
}

export default App;
