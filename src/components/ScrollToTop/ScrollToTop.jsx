import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    // Récupère le chemin de l'URL actuelle
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScrollToTop = () => {
            // Défilement en haut de la page après un délai pour permettre l'animation
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 500);
        };

        handleScrollToTop();
    }, [pathname]);

    return null;
}

export default ScrollToTop;
