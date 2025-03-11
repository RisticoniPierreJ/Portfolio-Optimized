import { BrowserRouter as Router } from "react-router-dom";
import "../src/utils/fontAwesomeConfig.js";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Footer from "./containers/Footer/Footer.jsx";
import ScrollToTopIcon from "./components/ScrollToTopIcon/ScrollToTopIcon.jsx";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes.jsx";

function App() {
    return (
        <Router basename="/Portfolio-Optimized">
            <ScrollToTop />
            <AnimatedRoutes />
            <ScrollToTopIcon />
            <Footer />
        </Router>
    );
}

export default App;
