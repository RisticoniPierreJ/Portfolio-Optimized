import "../../assets/css/main.css";
import TechIcons from "../../components/TechIcons/TechIcons";
import ContactContainer from "../../containers/ContactContainer/ContactContainer";
import HeroContainer from "../../containers/HeroContainer/HeroContainer";
import ProjectsContainer from "../../containers/ProjectsContainer/ProjectsContainer";
import ServicesContainer from "../../containers/ServicesContainer/ServicesContainer";
import WhyMeContainer from "../../containers/WhyMeContainer/WhyMeContainer";
import Header from "../../containers/Header/Header.jsx";
import { motion, useIsPresent } from "framer-motion";
import SectionDividerTop from "../../components/SectionDividerTop/SectionDividerTop.jsx";
import SectionDividerBottom from "../../components/SectionDividerBottom/SectionDividerBottom.jsx";

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

function Home() {
    const isPresent = useIsPresent();
    return (
        <>
            <main id="Acceuil" className="homeMainContainer">
                <Header />

                {/* Section  hero*/}
                <section className="acceuil">
                    <HeroContainer />
                    <SectionDividerTop />

                    {/* Ancre décalée pour comnpenser le la hauteur de la navbar */}
                    <div id="Projets"></div>
                </section>

                {/* Section  projet*/}
                <section className="project">
                    <div className="project__container">
                        <motion.h2
                            className="sectionTitle sectionTitle__light"
                            variants={variants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            Mes Projets
                        </motion.h2>

                        <ProjectsContainer />
                    </div>
                </section>

                {/* Section  services*/}
                <section id="Services" className="services">
                    <SectionDividerBottom />

                    <div className="services__container">
                        <motion.h2
                            className="sectionTitle sectionTitle__dark"
                            variants={variants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            Pourquoi faire appel à moi ?
                        </motion.h2>
                        <WhyMeContainer />
                        <motion.h2
                            className="sectionTitle sectionTitle__dark"
                            variants={variants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            Services
                        </motion.h2>
                        <ServicesContainer />
                    </div>

                    <SectionDividerTop />

                    {/* Ancre décalée pour comnpenser le la hauteur de la navbar */}
                    <div id="Compétences"></div>
                </section>

                {/* Section  compétences*/}
                <section className="skills">
                    <div className="skills__container">
                        <motion.h2
                            className="sectionTitle sectionTitle__light"
                            variants={variants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            Compétences
                        </motion.h2>
                        <TechIcons />
                    </div>
                </section>

                {/* Section  contact*/}
                <section id="Contact" className="contact">
                    <SectionDividerBottom />
                    <div className="contact__container">
                        <motion.h2
                            className="sectionTitle sectionTitle__dark"
                            variants={variants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            Contact
                        </motion.h2>
                        <ContactContainer />
                    </div>
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
        </>
    );
}

export default Home;
