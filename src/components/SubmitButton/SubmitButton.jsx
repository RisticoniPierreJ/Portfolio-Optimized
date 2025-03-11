import PropTypes from "prop-types";

import { motion } from "framer-motion";

function SubmitButton({ children }) {
    return (
        <>
            <motion.button
                className="button"
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {children}
            </motion.button>
        </>
    );
}

SubmitButton.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SubmitButton;
