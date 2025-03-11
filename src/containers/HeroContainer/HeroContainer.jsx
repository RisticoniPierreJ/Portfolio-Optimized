import HeroContent from "../../components/HeroContent/HeroContent";
import HeroImage from "../../components/HeroImage/HeroImage";
import { Link as ScrollLink } from "react-scroll";

import { motion } from "framer-motion";

function HeroContainer() {
    return (
        <div className="hero">
            <div className="hero__top">
                <HeroImage />
                <HeroContent />
            </div>
            <div className="hero__buttons">
                <ScrollLink
                    to="Contact"
                    href="#Contact"
                    smooth={true}
                    duration={500}
                >
                    <motion.button
                        className="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Me contacter"
                    >
                        Me contacter
                    </motion.button>
                </ScrollLink>

                <ScrollLink
                    to="Projets"
                    href="#Projets"
                    smooth={true}
                    duration={500}
                >
                    <motion.button
                        className="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Voir mes projets"
                    >
                        Mes projets
                    </motion.button>
                </ScrollLink>
            </div>
        </div>
    );
}

export default HeroContainer;
