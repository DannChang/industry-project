import "./App.scss";
import Nav from "../src/component/Nav/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav>Hello</Nav>
    </BrowserRouter>
  );
}

export default App;
