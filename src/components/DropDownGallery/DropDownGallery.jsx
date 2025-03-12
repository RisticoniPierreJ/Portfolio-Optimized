import PropTypes from "prop-types";
import { motion } from "framer-motion";

function DropDownGallery({ pages, onSelect, selectedIndex }) {
    return (
        <motion.div
            className="dropDownGalleryContainer"
            whileHover={{ scale: 1.1 }}
        >
            <label htmlFor="DropDownGalleryLabel" >Sélectionner une page</label>
            <select
                value={selectedIndex}
                onChange={(e) => onSelect(Number(e.target.value))}
                className="dropDownGallery"
                id="DropDownGalleryLabel"
            >
                {pages.map((page, index) => (
                    <option
                        key={index}
                        value={index}
                        className="dropDownGallery__item"
                    >
                        {page.title}
                    </option>
                ))}
            </select>
            <div className="dropDownGallery__arrow"></div>
        </motion.div>
    );
}

DropDownGallery.propTypes = {
    pages: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number.isRequired,
};

export default DropDownGallery;
