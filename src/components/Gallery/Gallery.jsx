import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImageUrl } from "../../utils/imageUtils";
import DropDownGallery from "../DropDownGallery/DropDownGallery";
import desktopImg from "../../assets/images/desktop_screen.png";
import mobileImg from "../../assets/images/mobile_screen.png";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            staggerChildren: 0.2,
        },
    },
};

function Gallery({ project }) {
    // Gestion de l'affichage des images
    const [selecteDesktopImg, setSelectedDesktopImg] = useState(0);
    const [selecteMobileImg, setSelectedMobileImg] = useState(0);

    const mutlipleDesktopImg = project.desktop.length > 1;
    const mutlipleMobileImg = project.mobile.length > 1;

    const handleDesktopNavigation = (direction) => {
        setSelectedDesktopImg((prevIndex) => {
            if (direction === "prev") {
                return prevIndex > 0
                    ? prevIndex - 1
                    : project.desktop.length - 1;
            } else if (direction === "next") {
                return prevIndex < project.desktop.length - 1
                    ? prevIndex + 1
                    : 0;
            }
        });
    };

    const handleMobileNavigation = (direction) => {
        setSelectedMobileImg((prevIndex) => {
            if (direction === "prev") {
                return prevIndex > 0
                    ? prevIndex - 1
                    : project.mobile.length - 1;
            } else if (direction === "next") {
                return prevIndex < project.mobile.length - 1
                    ? prevIndex + 1
                    : 0;
            }
        });
    };

    return (
        <motion.div
            className="viewProjectGallery__allGaleriesContainer"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            {/* Desktop  */}
            <motion.div className="galleryContainer" variants={variants}>
                {/* Barre de navigation de la galerie*/}
                {mutlipleDesktopImg && (
                    <div
                        className="galleryContainer__navigate"
                        aria-label="Navigation des images desktop"
                    >
                        <motion.button
                            onClick={() => handleDesktopNavigation("prev")}
                            whileHover={{ scale: 1.1 }}
                            aria-label="Image précédente desktop"
                        >
                            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                        </motion.button>
                        <DropDownGallery
                            pages={project.desktop}
                            onSelect={(index) => setSelectedDesktopImg(index)}
                            selectedIndex={selecteDesktopImg}
                        />
                        <motion.button
                            onClick={() => handleDesktopNavigation("next")}
                            whileHover={{ scale: 1.1 }}
                            aria-label="Image suivante desktop"
                        >
                            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                        </motion.button>
                    </div>
                )}

                {/* Galerie desktop */}
                <div className="desktopGallery">
                    <img
                        src={desktopImg}
                        alt="écran de bureau du site web"
                        className="desktopGallery__frame"
                        loading="lazy"
                    />
                    <div className="desktopGallery__scrollContainer desktopGallery__scrollContainer-scrollInner">
                        <img
                            src={getImageUrl(
                                "projectFullpage",
                                project.desktop[selecteDesktopImg].images[0]
                            )}
                            alt="aperçu du site web sur desktop"
                            className="desktopGallery__scrollContainer-image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Mobile  */}
            <motion.div className="galleryContainer" variants={variants}>
                {/* Barre de navigation de la galerie*/}
                {mutlipleMobileImg && (
                    <div
                        className="galleryContainer__navigate"
                        aria-label="Navigation des images mobile"
                    >
                        <motion.button
                            onClick={() => handleMobileNavigation("prev")}
                            whileHover={{ scale: 1.1 }}
                            aria-label="Image précédente mobile"
                        >
                            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                        </motion.button>
                        <DropDownGallery
                            pages={project.mobile}
                            onSelect={(index) => setSelectedMobileImg(index)}
                            selectedIndex={selecteMobileImg}
                        />
                        <motion.button
                            onClick={() => handleMobileNavigation("next")}
                            whileHover={{ scale: 1.1 }}
                            aria-label="Image suivante mobile"
                        >
                            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                        </motion.button>
                    </div>
                )}

                {/* Galerie mobile */}
                {project.mobile[0].title !== "" && (
                    <div className="mobileGallery">
                        <img
                            src={mobileImg}
                            alt="écran de mobile du site web"
                            className="mobileGallery__frame"
                            loading="lazy"
                        />
                        <div className="mobileGallery__scrollContainer mobileGallery__scrollContainer-scrollInner">
                            <img
                                src={getImageUrl(
                                    "projectFullpage",
                                    project.mobile[selecteMobileImg].images[0]
                                )}
                                alt="aperçu du site web sur mobile"
                                className="mobileGallery__scrollContainer-image"
                                loading="lazy"
                            />
                        </div>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}

Gallery.propTypes = {
    project: PropTypes.shape({
        desktop: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                images: PropTypes.arrayOf(PropTypes.string),
            })
        ).isRequired,
        mobile: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                images: PropTypes.arrayOf(PropTypes.string),
            })
        ).isRequired,
    }).isRequired,
};

export default Gallery;
