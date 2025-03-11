import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImageUrl } from "../../utils/imageUtils";
import { motion } from "framer-motion";
import projectsData from "../../data/projectsData";

const variants = {
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

function ProjectCard() {
    return (
        <>
            {projectsData.map((project, index) => (
                <Link
                    to={`/projet/${project.id}`}
                    key={index}
                    aria-label={`Lien vers le projet ${project.title}`}
                >
                    <motion.article
                        className="projectCard"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        variants={variants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        <img
                            src={getImageUrl(
                                "projectCover",
                                project.cover.desktop
                            )}
                            alt="Photo présentation du projet"
                            srcSet={`
                                    ${getImageUrl(
                                        "projectCover",
                                        project.cover.mobile
                                    )} 300w,
                                    ${getImageUrl(
                                        "projectCover",
                                        project.cover.tablet
                                    )} 800w,
                                    ${getImageUrl(
                                        "projectCover",
                                        project.cover.desktop
                                    )} 1240w
                                `}
                            // sizes="
                            //     (max-width: 768px) 300px,
                            //     (max-width: 1024px) 800px,
                            //     (max-width: 1440px) 1240px
                            // "
                            className="projectCard__image"
                        />
                        <div className="projectCard__content">
                            <h3 className="projectCard__title">
                                {project.title}
                            </h3>
                        </div>
                        <FontAwesomeIcon
                            icon="fa-solid fa-circle-plus"
                            className="projectCard__plusBtn"
                            aria-label={`Voir plus de détails sur le projet ${project.title}`}
                        />
                    </motion.article>
                </Link>
            ))}
        </>
    );
}

export default ProjectCard;

// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { getImageUrl } from "../../utils/imageUtils";
// import { motion } from "framer-motion";
// import projectsData from "../../data/projectsData";

// const variants = {
//     initial: {
//         opacity: 0,
//         y: 100,
//     },
//     animate: (index) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.3,
//             delay: index * 0.1,
//         },
//     }),
// };

// function ProjectCard() {
//     return (
//         <>
//             {projectsData.map((project, index) => (
//                 <Link
//                     to={`/projet/${project.id}`}
//                     key={index}
//                     aria-label={`Lien vers le projet ${project.title}`}
//                 >
//                     <motion.article
//                         className="projectCard"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.9 }}
//                         variants={variants}
//                         initial="initial"
//                         whileInView="animate"
//                         viewport={{ once: true }}
//                         custom={index}
//                     >
//                         <img
//                             src={getImageUrl(
//                                 "projectCover",
//                                 project.cover.desktop
//                             )}
//                             alt="Photo présentation du projet"
//                             srcSet={`
//                                     ${getImageUrl(
//                                         "projectCover",
//                                         project.cover.mobile
//                                     )} 300w,
//                                     ${getImageUrl(
//                                         "projectCover",
//                                         project.cover.tablet
//                                     )} 800w,
//                                     ${getImageUrl(
//                                         "projectCover",
//                                         project.cover.desktop
//                                     )} 1240w
//                                 `}
//                             sizes="
//                                     (min-width: 1380px) 517px, (min-width: 780px) calc(35.69vw + 32px), 341px
//                             "
//                             // loading="lazy"
//                             className="projectCard__image"
//                         />
//                         <div className="projectCard__content">
//                             <h3 className="projectCard__title">
//                                 {project.title}
//                             </h3>
//                         </div>
//                         <FontAwesomeIcon
//                             icon="fa-solid fa-circle-plus"
//                             className="projectCard__plusBtn"
//                             aria-label={`Voir plus de détails sur le projet ${project.title}`}
//                         />
//                     </motion.article>
//                 </Link>
//             ))}
//         </>
//     );
// }

// export default ProjectCard;
