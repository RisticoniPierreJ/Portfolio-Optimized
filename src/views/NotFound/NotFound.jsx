import { NavLink } from "react-router-dom";

function NotFound() {
    return (
    
        <div className="notFound__container">
            <h1 className="notFound__title">404</h1>
            <p className="notFound__txt">La page que vous demandez est introuvable.</p>
            <NavLink className="notFound__link" to="/">Retourner sur la page d&apos;accueil</NavLink>
        </div>
        
    );
}

export default NotFound;