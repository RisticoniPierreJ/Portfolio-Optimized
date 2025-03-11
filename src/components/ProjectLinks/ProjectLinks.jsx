import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



function ProjectLinks({ repos = "", demo = "" }) {
    return (
        <article className="projectLinks">
            <Link
                to={repos}
                className={`projectLinks__repo ${
                    !repos ? "projectLinks__disabled" : ""
                }`}
                aria-disabled={!repos}
                aria-label="Lien vers le code source du projet"
            >
                <FontAwesomeIcon icon="fa-brands fa-github" size="2x" />
                <p className="projectLinks__title">Code</p>
            </Link>
            <Link
                to={demo}
                className={`projectLinks__demo ${
                    !demo ? "projectLinks__disabled" : ""
                }`}
                aria-disabled={!demo}
                aria-label="Lien vers la démonstration du projet"
            >
                <FontAwesomeIcon icon="fa-solid fa-globe" size="2x" />
                <p className="projectLinks__title">Demo</p>
            </Link>
        </article>
    );
}

ProjectLinks.propTypes = {
    repos: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
};

export default ProjectLinks;
