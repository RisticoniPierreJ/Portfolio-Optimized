import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

function ScrollToTopIcon() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div
            className={`scrollToTopIcon ${showScrollToTop ? "show" : ""}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <ScrollLink
                to="Acceuil"
                href="#Acceuil"
                smooth={true}
                duration={500}
                aria-label="Bouton de retour en haut de page"
            >
                <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
            </ScrollLink>
        </motion.div>
    );
}

export default ScrollToTopIcon;
