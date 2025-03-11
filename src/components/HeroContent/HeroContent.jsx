import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
            // type: "spring",
            // stiffness: 180,
            // damping: 12,
        },
    },
};

function HeroContent() {
    return (
        <motion.div
            className="heroContent"
            
            variants={variants}
            initial="initial"
            animate="animate"
        >
            <div className="heroContent__title">
                <motion.p
                    className="heroContent__title-welcome"
                    variants={variants}
                >
                    Bienvenue !{" "}
                </motion.p>
                <motion.h1
                    className="heroContent__title-name"
                    variants={variants}
                >
                    Je suis <span>Pierre-Jean Risticoni</span>
                </motion.h1>
                <motion.p
                    className="heroContent__title-job"
                    variants={variants}
                >
                    Développeur Web
                </motion.p>
            </div>
            <motion.p className="heroContent__description" variants={variants}>
                En tant que jeune développeur web en pleine progression, je suis
                sur un chemin de croissance rapide et d&apos;apprentissage
                continu. Ma passion pour la création de sites web interactifs et
                visuellement attrayants me pousse à perfectionner constamment
                mes compétences.
                
            </motion.p>
            <motion.p className="heroContent__description" variants={variants}>
                <br /> Mon objectif actuel est de maîtriser les technologies et
                les frameworks les plus récents pour rester à la pointe dans le
                paysage technologique en constante évolution. En utilisant ma
                créativité et mon expertise technique, je vise à offrir des
                solutions innovantes qui non seulement répondent aux attentes
                des clients, mais les dépassent.
            </motion.p>
        </motion.div>
    );
}

export default HeroContent;
