import PropTypes from "prop-types";
import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            delay: index * 0.2,
        },
    }),
};

function ProjectTags({ tags }) {
    return (
        <article className="tags">
            <motion.ul variants={variants}>
                {tags.map((tag, index) => (
                    <motion.li
                        key={index}
                        variants={variants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        {tag}
                    </motion.li>
                ))}
            </motion.ul>
        </article>
    );
}

ProjectTags.propTypes = {
    tags: PropTypes.array.isRequired,
};

export default ProjectTags;
