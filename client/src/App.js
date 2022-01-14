import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TutorialPage from "./pages/TutorialPage/TutorialPage";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={TutorialPage} />
        <Route path="/game" exact component={GamePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
