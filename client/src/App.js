import "./App.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import TutorialPage from "./pages/TutorialPage/TutorialPage";

function App() {
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/data")
      .then((result) => {
        setCardInfo(result.data);
      })
      .catch();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/tutorial/starter" />}
        />

        {cardInfo.length > 0 && (
          <>
            <Route
              path="/tutorial/starter"
              exact
              render={() => {
                return (
                  <TutorialPage cardInfo={cardInfo[0]} page={"--starter"} />
                );
              }}
            />

            <Route
              path="/tutorial/moving-around"
              exact
              render={() => {
                return (
                  <TutorialPage
                    cardInfo={cardInfo[1]}
                    page={"--moving-around"}
                  />
                );
              }}
            />

            <Route
              path="/tutorial/interact-with-others"
              exact
              render={() => {
                return (
                  <TutorialPage
                    cardInfo={cardInfo[2]}
                    page={"--interact-with-others"}
                  />
                );
              }}
            />

            <Route
              path="/tutorial/play-mini-games"
              exact
              render={() => {
                return (
                  <TutorialPage
                    cardInfo={cardInfo[3]}
                    page={"--play-mini-games"}
                  />
                );
              }}
            />

            <Route
              path="/tutorial/workplace-culture"
              exact
              render={() => {
                return (
                  <TutorialPage
                    cardInfo={cardInfo[4]}
                    page={"--workplace-culture"}
                  />
                );
              }}
            />

            <Route
              path="/tutorial/mission-values"
              exact
              render={() => {
                return <TutorialPage cardInfo={cardInfo[5]} page={""} />;
              }}
            />

            <Route
              path="/tutorial/roles-responsabilities"
              exact
              render={() => {
                return <TutorialPage cardInfo={cardInfo[6]} page={""} />;
              }}
            />

            <Route
              path="/tutorial/health-safety"
              exact
              render={() => {
                return <TutorialPage cardInfo={cardInfo[7]} page={""} />;
              }}
            />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
