import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Links from "../../components/Links/Links";
import ToggleButton from "../../components/ToggleButton/ToggleButton";

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            ease: "linear",
            duration: 0.5,
        },
    },
    closed: {
        clipPath: "circle(20px at 167.5px 23.5px)",
        transition: {
            ease: "linear",
            duration: 0.3,
        },
    },
};

function Navbar() {
    const [open, setOpen] = useState(false);
    const navbarRef = useRef(null);

    // Gestion de la fermeture du menu si l'utilisateur clique en dehors de la navbar
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (open && !navbarRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [open]);

    return (
        <>
            <motion.div
                className="navbar"
                initial={open ? "open" : "closed"}
                animate={open ? "open" : "closed"}
                ref={navbarRef}
            >
                <motion.div className="navbar__background" variants={variants}>
                    <Links />
                </motion.div>
                <ToggleButton setOpen={setOpen} className="toggleButton" />
            </motion.div>

            <div className="navbarDesktop">
                <div className="navbarDesktop__background">
                    <Links />
                </div>
            </div>
        </>
    );
}

export default Navbar;
