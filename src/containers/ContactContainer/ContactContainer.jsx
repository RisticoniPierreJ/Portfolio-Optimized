import ContactForm from "../../components/ContactForm/ContactForm";
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
        },
    },
};

function ContactContainer() {
    return (
        <div className="contactContainer">
            <motion.p
                className="contactContainer__SubTitle"
                variants={variants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                Vous avez un <span>projet</span> ? contactez moi !
            </motion.p>
            <ContactForm />
        </div>
    );
}

export default ContactContainer;
