import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Collapse from "../../components/Collapse/Collapse";
import ProjectTags from "../../components/ProjectTags/ProjectTags";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
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

const challengesVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            delay: index * 0.1,
        },
    }),
};

// Utilitaire pour diviser le texte par les points et générer des paragraphes
function splitTextToParagraphs(text) {
    return text.split(".").map((sentence, index) => {
        // Ne pas ajouter de <p> pour les phrases vides après un point final
        if (sentence.trim()) {
            return (
                <p key={index}>
                    <FontAwesomeIcon icon="fa-solid fa-caret-right" />{" "}
                    {sentence.trim()}.
                </p>
            );
        }
        return null;
    });
}

function ProjectContent({ project }) {
    return (
        <motion.div
            className="framerMotionContainer"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="viewProject__description">
                <motion.h2
                    className="viewProject__description-title"
                    variants={variants}
                >
                    Description
                </motion.h2>
                <div className="viewProject__description-contentAndTagsContainer">
                    <motion.div
                        className="viewProject__description-content"
                        variants={variants}
                    >
                        {splitTextToParagraphs(project.description)}
                        <ProjectLinks
                            repos={project.repository}
                            demo={project.demo}
                        />
                    </motion.div>

                    <motion.div
                        className="viewProject__tags"
                        variants={variants}
                    >
                        <ProjectTags tags={project.tags} />
                    </motion.div>
                </div>
            </div>

            <div className="viewProject__challenges">
                <motion.h2
                    className="viewProject__challenges-title"
                    variants={challengesVariants}
                >
                    Défis Rencontrés et Solutions
                </motion.h2>

                <motion.div
                    className="viewProject__challenges-content"
                    variants={challengesVariants}
                >
                    {project.challenges.map(({ title, content }, index) => (
                        <motion.div
                            key={index}
                            variants={challengesVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                        >
                            <Collapse
                                title={title}
                                customClass="projectCollapse"
                            >
                                {splitTextToParagraphs(content)}
                            </Collapse>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

ProjectContent.propTypes = {
    project: PropTypes.shape({
        description: PropTypes.string.isRequired,
        repository: PropTypes.string.isRequired,
        demo: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
        challenges: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default ProjectContent;