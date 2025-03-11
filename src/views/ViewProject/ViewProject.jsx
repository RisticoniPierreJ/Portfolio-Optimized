import { Navigate, useParams } from "react-router-dom";
import projectsData from "../../data/projectsData.json";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import ProjectContent from "../../components/ProjectContent/ProjectContent";
import { motion, useIsPresent } from "framer-motion";
import SectionDividerBottom from "../../components/SectionDividerBottom/SectionDividerBottom";
import SectionDividerTop from "../../components/SectionDividerTop/SectionDividerTop";

const variants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
        },
    },
};

function ViewProject() {
    // Gestion de la récupération des données du projet
    const { id } = useParams();
    const project = projectsData.find((project) => project.id === id);
    const isPresent = useIsPresent();

    if (!project) {
        return <Navigate to="/404" replace />;
    }

    return (
        <main className="viewProjecttMain" id="Acceuil">
            <Banner project={project} />

            {/* Contenu */}
            <section className="viewProject">
                <ProjectContent project={project} />
                <SectionDividerTop />
            </section>

            {/* Galerie */}
            <section className="viewProjectGallery">
                <motion.h2
                    className="viewProjectGallery__title"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    Galeries
                </motion.h2>
                <Gallery project={project} />
            </section>

            <section>
                <SectionDividerBottom />
            </section>

            {/* Animation pour les transitions entre les pages */}
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{
                    scaleX: 0,
                    transition: { duration: 0.5, ease: "circOut" },
                }}
                exit={{
                    scaleX: 1,
                    transition: { duration: 0.5, ease: "circIn" },
                }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="privacy-screen"
            />
        </main>
    );
}

export default ViewProject;
