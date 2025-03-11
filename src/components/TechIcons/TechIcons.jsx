import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import techIconsData from "../../data/techIconsData";
import { getImageUrl } from "../../utils/imageUtils";
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
            staggerChildren: 0.08,
        },
    },
};

const iconVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
};

function TechIcons() {
    return (
        <motion.div
            className="techIconGrid"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            {techIconsData.map((icon, index) => (
                <motion.article
                    className="techIcon"
                    key={index}
                    variants={iconVariants}
                >
                    <img
                        className="techIcon__image"
                        src={getImageUrl("techIcons", icon.fileName)}
                        alt={`Icone de technologie ${icon.title}`}
                        loading="lazy"
                    />
                    <h3 className="techIcon__title">{icon.title}</h3>
                </motion.article>
            ))}

            {/* Icône points de suspension toujours présent en dernier */}
            <motion.article className="techIcon" variants={iconVariants}>
                <FontAwesomeIcon
                    icon="fa-solid fa-ellipsis"
                    className="techIcon__image"
                />
            </motion.article>
        </motion.div>
    );
}

export default TechIcons;
