import "./TutorialPage.scss";
import TutorialSideMenu from "../../components/TutorialSideMenu/TutorialSideMenu";
import TutorialMain from "../../components/TutorialMain/TutorialMain";


export default function TutorialPage(props) {

    return (
        <>
            <section className="tutorial">
                <article className="tutorial__side-menu">
                    <TutorialSideMenu />

                </article>
                <article className="tutorial__main">
                    <TutorialMain 
                        cardInfo={props.cardInfo}
                    />

                </article>
              
        </section>
        </>
      );



}