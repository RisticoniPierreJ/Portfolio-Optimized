import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapse from "../../components/Collapse/Collapse";
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

function ServicesContainer() {
    return (
        <motion.div
            className="servicesContainer"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <motion.div variants={variants}>
                <Collapse title="Création" customClass="collapse">
                    <div className="servicesCards">
                        <p className="servicesCards__text">
                            Création de sites Internet adaptés à vos besoins
                            professionnels
                        </p>
                        <ul className="servicesCards__list">
                            <li>
                                <div className="servicesCards__list-item">
                                    <FontAwesomeIcon
                                        className="servicesCards__list-icon"
                                        icon="fa-solid fa-caret-right"
                                    />
                                    Sites one-page et vitrine pour une
                                    présentation efficace
                                </div>
                            </li>
                            <li>
                                <div className="servicesCards__list-item">
                                    <FontAwesomeIcon
                                        className="servicesCards__list-icon"
                                        icon="fa-solid fa-caret-right"
                                    />
                                    Blogs et sites de contenu pour les créateurs
                                </div>
                            </li>
                            <li>
                                <div className="servicesCards__list-item">
                                    <FontAwesomeIcon
                                        className="servicesCards__list-icon"
                                        icon="fa-solid fa-caret-right"
                                    />
                                    Boutiques en ligne et marketplaces
                                </div>
                            </li>
                            <li>
                                <div className="servicesCards__list-item">
                                    <FontAwesomeIcon
                                        className="servicesCards__list-icon"
                                        icon="fa-solid fa-caret-right"
                                    />
                                    Applications web interactives et de
                                    dashboards
                                </div>
                            </li>
                        </ul>
                        <p className="servicesCards__text">
                            Design adaptatif et fully responsive, priorisant
                            mobile-first ou desktop-first selon vos besoins
                        </p>
                    </div>
                </Collapse>
            </motion.div>
            <motion.div variants={variants}>
                <Collapse title="Optimisation" customClass="collapse">
                    <div className="servicesCards">
                        <p className="servicesCards__text">
                            Optimisez chaque aspect de votre site pour des
                            performances maximales
                        </p>
                        <ul className="servicesCards__list">
                            <li>
                                <div className="servicesCards__list-item">
                                    <FontAwesomeIcon
                                        className="servicesCards__list-icon"
                                        icon="fa-solid fa-caret-right"
                                    />
                                    Amélioration référencement et SEO
                                </div>
                            </li>
                            <li>
                                <div className="servicesCards__list-item">
                                    <FontAwesomeIcon
                                        className="servicesCards__list-icon"
                                        icon="fa-solid fa-caret-right"
                                    />
                                    Optimisation des performances techniques
                                </div>
                            </li>
                            <li>
                                <div className="servicesCards__list-item">
                                    <FontAwesomeIcon
                                        className="servicesCards__list-icon"
                                        icon="fa-solid fa-caret-right"
                                    />
                                    Renforcement de l&apos;Accessibilité
                                </div>
                            </li>
                            <li>
                                <div className="servicesCards__list-item">
                                    <FontAwesomeIcon
                                        className="servicesCards__list-icon"
                                        icon="fa-solid fa-caret-right"
                                    />
                                    Green Code et pratiques durables
                                </div>
                            </li>
                        </ul>
                        <p className="servicesCards__text">
                            Audit technique offert
                        </p>
                    </div>
                </Collapse>
            </motion.div>
            <motion.div variants={variants}>
                <Collapse title="Maintenance" customClass="collapse">
                    <div className="servicesCards">
                        <p className="servicesCards__text">
                            Gardez votre site à jour et performant
                        </p>
                        <ul className="servicesCards__list">
                            <li>
                                <div className="servicesCards__list-item">
                                    <FontAwesomeIcon
                                        className="servicesCards__list-icon"
                                        icon="fa-solid fa-caret-right"
                                    />
                                    Correction des problèmes techniques
                                </div>
                            </li>
                            <li>
                                <div className="servicesCards__list-item">
                                    <FontAwesomeIcon
                                        className="servicesCards__list-icon"
                                        icon="fa-solid fa-caret-right"
                                    />
                                    Intégration de nouvelles fonctionnalités
                                </div>
                            </li>
                            <li>
                                <div className="servicesCards__list-item">
                                    <FontAwesomeIcon
                                        className="servicesCards__list-icon"
                                        icon="fa-solid fa-caret-right"
                                    />
                                    Mises à jour régulières\
                                </div>
                            </li>
                            <li>
                                <div className="servicesCards__list-item">
                                    <FontAwesomeIcon
                                        className="servicesCards__list-icon"
                                        icon="fa-solid fa-caret-right"
                                    />
                                    Sauvegardes automatiques
                                </div>
                            </li>
                        </ul>
                    </div>
                </Collapse>
            </motion.div>
        </motion.div>
    );
}

export default ServicesContainer;
