import "./App.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import TutorialPage from "./pages/TutorialPage/TutorialPage";
import GamePage from "./pages/GamePage/GamePage";

function App() {

  //start
  const objectInfo1 = {
    headerText: "1Test header",
    upperText: "1Test upper text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
    lowerText: "1Test lower text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
    prevLink: "",
    nextLink: "moving-around"
};

//moving
const objectInfo2 = {
    headerText: "2Test header",
    upperText: "2Test upper text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
    lowerText: "2Test lower text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
    prevLink: "starter",
    nextLink: "interact-with-others"
};

//interact
const objectInfo3 = {
  headerText: "3Test header",
  upperText: "3Test upper text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
  lowerText: "3Test lower text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
  prevLink: "moving-around",
  nextLink: "play-mini-games"
};

//play
const objectInfo4 = {
  headerText: "4Test header",
  upperText: "4Test upper text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
  lowerText: "4Test lower text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
  prevLink: "interact-with-others",
  nextLink: "workplace-culture"
};

//work
const objectInfo5 = {
  headerText: "5Test header",
  upperText: "5Test upper text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
  lowerText: "5Test lower text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
  prevLink: "play-mini-games",
  nextLink: "mission-values"
};

//mission
const objectInfo6 = {
  headerText: "6Test header",
  upperText: "6Test upper text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
  lowerText: "6Test lower text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
  prevLink: "workplace-culture",
  nextLink: "roles-responsabilities"
};

//roles
const objectInfo7 = {
  headerText: "7Test header",
  upperText: "7Test upper text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
  lowerText: "7Test lower text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
  prevLink: "mission-values",
  nextLink: "health-safety"
};

//health
const objectInfo8 = {
  headerText: "8Test header",
  upperText: "8Test upper text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
  lowerText: "8Test lower text here hdcdbd ncdhyd ugcugdc udgchuc gd cdhcdg djcbd",
  prevLink: "roles-responsabilities",
  nextLink: ""
};


  return (
    <BrowserRouter>
      <Switch>
      
        <Route exact path="/" render={() => (<Redirect to="/tutorial/starter" />)} />

        <Route path="/tutorial/starter" exact render={() => {
            return (
              <TutorialPage                              
              cardInfo={objectInfo1}
              page={"--starter"}
              />
            )
          }}
        />

        <Route path="/tutorial/moving-around" exact render={() => {
            return (
              <TutorialPage                              
              cardInfo={objectInfo2}
              page={"--moving-around"}
              />
            )
          }}
        />

        <Route path="/tutorial/interact-with-others" exact render={() => {
            return (
              <TutorialPage                              
              cardInfo={objectInfo3}
              page={"--interact-with-others"}
              />
            )
          }}
        />

        <Route path="/tutorial/play-mini-games" exact render={() => {
            return (
              <TutorialPage                              
              cardInfo={objectInfo4}
              page={"--play-mini-games"}
              />
            )
          }}
        />

        <Route path="/tutorial/workplace-culture" exact render={() => {
            return (
              <TutorialPage                              
              cardInfo={objectInfo5}
              page={"--workplace-culture"}
              />
            )
          }}
        />

        <Route path="/tutorial/mission-values" exact render={() => {
            return (
              <TutorialPage                              
              cardInfo={objectInfo6}
              page={""}              
              />
            )
          }}
        />

        <Route path="/tutorial/roles-responsabilities" exact render={() => {
            return (
              <TutorialPage                              
              cardInfo={objectInfo7}
              page={""}
              />
            )
          }}
        />

        <Route path="/tutorial/health-safety" exact render={() => {
            return (
              <TutorialPage                              
              cardInfo={objectInfo8}
              page={""}
              />
            )
          }}
        />
        
        {/* <Route path="/game" exact component={GamePage} /> */}        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
