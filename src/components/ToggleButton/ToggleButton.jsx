import PropTypes from "prop-types";
import { motion } from "framer-motion";

function ToggleButton({ setOpen }) {
    return (
        <button className="toggleButton" onClick={() => setOpen((prev) => !prev)} aria-label="Bouton d'ouverture du menu de navigation">
            <svg width="23" height="23" viewBox="0 0 24 24">
                <motion.path
                    strokeWidth="2"
                    stroke="white"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 3 6 L 21 6" },
                        open: { d: "M 6 18 L 18 6" },
                    }}
                />
                <motion.path
                    strokeWidth="2"
                    stroke="white"
                    strokeLinecap="round"
                    d="M 3 12 L 21 12"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                />
                <motion.path
                    strokeWidth="2"
                    stroke="white"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 3 18 L 21 18" },
                        open: { d: "M 6 6 L 18 18" },
                    }}
                />
            </svg>
        </button>
    );
}

ToggleButton.propTypes = {
    setOpen: PropTypes.func.isRequired,
};

export default ToggleButton;
