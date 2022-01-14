import "./TutorialPage.scss";
import TutorialSideMenu from "../../components/TutorialSideMenu/TutorialSideMenu";
import TutorialEntry from "../../components/TutorialEntry/TutorialEntry";

export default function TutorialPage(props) {
  return (
    <>
      <section className="tutorial">
        <article className="tutorial__side-menu">
          <TutorialSideMenu />
        </article>
        <article className="tutorial__main">
          <TutorialEntry />
        </article>
      </section>
    </>
  );
}
