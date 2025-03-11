import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../views/Home/Home";
import ViewProject from "../../views/ViewProject/ViewProject";
import NotFound from "../../views/NotFound/NotFound";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
    
    return (
        <AnimatePresence mode="wait" >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projet/:id" element={<ViewProject />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;