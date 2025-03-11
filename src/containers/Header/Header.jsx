import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    const location = useLocation();

    return (
        <header>
            {location.pathname === "/" && (
                <nav className="header">
                    <ScrollLink
                        className="header__wrapper"
                        to="Acceuil"
                        href="#Acceuil"
                        aria-label="Bouton de retour en haut de page"
                        smooth={true}
                        duration={500}
                    >
                        <FontAwesomeIcon icon="fa-solid fa-house" className="header__homeIcon"/>
                    </ScrollLink>

                    <Navbar />
                </nav>
            )}
        </header>
    );
}

export default Header;

