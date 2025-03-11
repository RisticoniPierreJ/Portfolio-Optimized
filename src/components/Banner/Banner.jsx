import { getImageUrl } from "../../utils/imageUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


function Banner({ project }) {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/");
    };

    return (
        <div className="viewProjectBanner">
            <img
                className="viewProjectBanner__img"
                src={getImageUrl("projectCover", project.cover.desktop)}
                alt="Bannière du projet"
                srcSet={`
                    ${getImageUrl("projectCover", project.cover.mobile)} 300w,
                    ${getImageUrl("projectCover", project.cover.tablet)} 800w,
                    ${getImageUrl("projectCover", project.cover.desktop)} 1240w
                `}
                sizes="100vw"
            />

            <div className="viewProjectBanner__logo">
                <img
                    src={getImageUrl("projectLogo", project.logo)}
                    alt="logo du site web"
                />
            </div>
            <FontAwesomeIcon
                icon="fa-regular fa-circle-xmark"
                className="viewProjectBanner__closeIcon"
                onClick={handleClose}
            />
        </div>
    );
}

Banner.propTypes = {
    project: PropTypes.shape({
        cover: PropTypes.shape({
            mobile: PropTypes.string.isRequired,
            tablet: PropTypes.string.isRequired,
            desktop: PropTypes.string.isRequired,
        }).isRequired,
        logo: PropTypes.string.isRequired,
    }).isRequired,
};

export default Banner;
