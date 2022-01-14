import "./TutorialPage.scss";
import TutorialSideMenu from "../../components/TutorialSideMenu/TutorialSideMenu";
import TutorialMain from "../../components/TutorialMain/TutorialMain";

export default function TutorialPage(props) {
  let displayArray = [];
  if (props.page === "--starter") {
    displayArray = [true, false, false, false, false, false, false, false];
  } else if (props.page === "--moving-around") {
    displayArray = [true, true, false, false, false, false, false, false];
  } else if (props.page === "--interact-with-others") {
    displayArray = [true, true, true, false, false, false, false, false];
  } else if (props.page === "--play-mini-games") {
    displayArray = [true, true, true, true, false, false, false, false];
  } else if (props.page === "--workplace-culture") {
    displayArray = [true, true, true, true, true, false, false, false];
  }
  return (
    <>
      <section className="tutorial">
        <article className="tutorial__side-menu">
          <TutorialSideMenu displayArray={displayArray} />
        </article>
        <article className="tutorial__main">
          <TutorialMain cardInfo={props.cardInfo} page={props.page} />
        </article>
      </section>
    </>
  );
}
