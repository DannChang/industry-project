import "./TutorialMain.scss";
import { Link } from "react-router-dom";

export default function TutorialMain(props) {

    const { headerText, upperText, lowerText, prevLink, nextLink } = props;






    return (
        <card className="modal">
            <section className="modal__header">
                <img className="modal__avatar"/>
                <h1 className="modal__header-text">
                    {headerText}
                </h1>
            </section>
            <section className="modal__text">
                <p className="modal__upper-text">
                    {upperText}
                </p>
                <p className="modal__lower-text">
                    {lowerText}
                </p>
            </section>
            <section className="modal__footer">
                <Link to={`/XXXX/${prevLink}`}>
                    <img className="modal__left-arrow"/>
                </Link>
                <Link to={`/XXXX/${nextLink}`}>
                    <img className="modal__right-arrow"/>
                </Link>
                <button className="modal__skip">SKIP</button>
            </section>
        </card>

        );



}