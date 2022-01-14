import "./TutorialMain.scss";
import { Link } from "react-router-dom";
import avatarIcon from "../../assets/icons/avatar.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowLeftUnable from "../../assets/icons/arrow-left-unable.svg";
import arrowRightUnable from "../../assets/icons/arrow-right-unable.svg";

export default function TutorialMain(props) {
console.log(props);
    const { headerText, upperText, lowerText, prevLink, nextLink } = props.cardInfo;

    return (
        <>
            {props.cardInfo && (


                  

                    <section className={"modal modal" + props.page}>

             
                    



                    <article className="modal__card">
                        <section className="modal__header">
                            <img className="modal__avatar" src={avatarIcon} alt="Avatar"/>
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

                        
                            {prevLink && (
                                <Link to={`/tutorial/${prevLink}`}>
                                    <img className="modal__left-arrow" src={arrowLeft} alt="Previous page"/>
                                </Link>
                            )}
                            {!prevLink && (
                                <div>
                                    <img className="modal__left-arrow modal__left-arrow--unavailable" src={arrowLeftUnable} alt="Previous page unavailable"/>
                                </div>
                            )}

                            {nextLink && (
                                <Link to={`/tutorial/${nextLink}`}>
                                    <img className="modal__right-arrow" src={arrowRight} alt="Next page"/>
                                </Link>
                            )}
                            {!nextLink && (
                                <div>
                                    <img className="modal__right-arrow modal__right-arrow--unavailable" src={arrowRightUnable} alt="Next page unavailable"/>
                                </div>
                            )}

                            <Link to={`/`}>
                                <div className="modal__skip">SKIP</div>
                            </Link>                    
                        </section>
                    </article>
                </section>
                
            )}
        </>
        );



}