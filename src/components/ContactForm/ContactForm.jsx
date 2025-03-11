import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SubmitButton from "../SubmitButton/SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const inputVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
};

function ContactForm() {
    const form = useRef();
    const [error, setError] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        // Envoie le formulaire avec emailjs
        emailjs
            .sendForm("service_y242j7j", "template_s42qskr", form.current, {
                publicKey: "kAPcRjfujUwO4rQQk",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    setError(false);
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setError(true);
                }
            );
    };

    return (
        <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contactForm"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <motion.div
                className="contactForm__inputContainer"
                variants={inputVariants}
            >
                <FontAwesomeIcon
                    className="contactForm__icon"
                    icon="fa-solid fa-user"
                    aria-label="Nom"
                />
                <label htmlFor="name"></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Nom(*)"
                />
            </motion.div>
            <motion.div
                className="contactForm__inputContainer"
                variants={inputVariants}
            >
                <FontAwesomeIcon
                    className="contactForm__icon"
                    icon="fa-solid fa-envelope"
                    aria-label="Email"
                />
                <label htmlFor="email"></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email(*)"
                />
            </motion.div>
            <motion.div
                className="contactForm__inputContainer"
                variants={inputVariants}
            >
                <FontAwesomeIcon
                    className="contactForm__icon"
                    icon="fa-solid fa-phone-flip"
                    aria-label="Téléphone"
                />
                <label htmlFor="phone"></label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Téléphone"
                />
            </motion.div>
            <motion.div
                className="contactForm__inputContainer"
                variants={inputVariants}
            >
                <FontAwesomeIcon
                    className="contactForm__icon"
                    icon="fa-solid fa-comment-dots"
                    aria-label="Message"
                />
                <label htmlFor="message"></label>
                <textarea
                    id="message"
                    name="message"
                    rows={10}
                    cols={30}
                    maxLength={1500}
                    required
                    placeholder="Votre message(*)"
                />
            </motion.div>
            <motion.div
                className="contactForm__button"
                variants={inputVariants}
            >
                <SubmitButton aria-label="Envoyer le message">
                    Envoyer
                </SubmitButton>
            </motion.div>

            {/* Affichage des messages de succès ou d'erreur */}
            {error === false ? (
                <p>Message envoyé !</p>
            ) : (
                error === true && <p>Erreur lors de l&apos;envoi du message</p>
            )}
        </motion.form>
    );
}

export default ContactForm;
