import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            staggerChildren: 0.4,
        },
    },
};

function WhyMeContainer() {
    const [cardCount, setCardCount] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const wrapperRef = useRef(null);
    const chevronLeftRef = useRef(null);
    const chevronRightRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const chevronLeft = chevronLeftRef.current;
        const chevronRight = chevronRightRef.current;

        const cards = cardRefs.current;
        setCardCount(cards.length);

        const checkScrollPosition = () => {
            if (wrapper.scrollLeft > 0) {
                chevronLeft.classList.add("whyMe__chevron-visible");
            } else {
                chevronLeft.classList.remove("whyMe__chevron-visible");
            }

            if (
                wrapper.scrollLeft + wrapper.clientWidth <
                wrapper.scrollWidth
            ) {
                chevronRight.classList.add("whyMe__chevron-visible");
            } else {
                chevronRight.classList.remove("whyMe__chevron-visible");
            }

            const cardWidth = wrapper.scrollWidth / cards.length;
            setActiveIndex(Math.round(wrapper.scrollLeft / cardWidth));
        };

        wrapper.addEventListener("scroll", checkScrollPosition);
        setTimeout(checkScrollPosition, 100);

        return () => {
            wrapper.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

    const scrollLeft = () => {
        wrapperRef.current.scrollBy({ left: -330, behavior: "smooth" });
    };

    const scrollRight = () => {
        wrapperRef.current.scrollBy({ left: 330, behavior: "smooth" });
    };

    return (
        <div className="whyMe">
            <motion.div
                className="whyMe__title"
                variants={variants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <motion.p variants={variants}>
                    La <span>présence en ligne</span> est devenue
                    <span> essentielle</span> pour toutes les entreprises, quelle
                    que soit leur taille ou leur secteur.
                </motion.p>

                <motion.p variants={variants}>
                    Pour maximiser <span>l&apos;impact</span> de votre site web,
                    il est <span>crucial</span> de surveiller et de comprendre
                    les éléments suivants :
                </motion.p>
            </motion.div>

            <div className="whyMe__container">
                <FontAwesomeIcon
                    className="whyMe__chevron whyMe__chevron-left"
                    icon="fa-solid fa-chevron-left"
                    onClick={scrollLeft}
                    ref={chevronLeftRef}
                />

                <motion.div
                    className="whyMe__wrapper"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    ref={wrapperRef}
                >
                    <motion.article
                        className="whyMe__card"
                        variants={cardVariants}
                        ref={(el) => (cardRefs.current[0] = el)}
                    >
                        
                        <FontAwesomeIcon
                            className="whyMe__card-icon"
                            icon="fa-solid fa-screwdriver-wrench"
                        />
                        <h3 className="whyMe__card-title">
                            Maintenance et Efficacité
                        </h3>
                        <p className="whyMe__card-text">
                            Des opérations de maintenance régulières pour
                            maintenir la performance et l&apos;efficacité de
                            votre site sont indispensables.
                        </p>
                    </motion.article>
                    <motion.article
                        className="whyMe__card"
                        variants={cardVariants}
                        ref={(el) => (cardRefs.current[1] = el)}
                    >
                        <FontAwesomeIcon
                            className="whyMe__card-icon"
                            icon="fa-solid fa-rotate"
                        />
                        <h3 className="whyMe__card-title">
                            Technologies à Jour
                        </h3>
                        <p className="whyMe__card-text">
                            Une refonte complète peut s&apos;avérer nécessaire
                            pour rester compétitif grâce à des technologies à
                            jour.
                        </p>
                    </motion.article>
                    <motion.article
                        className="whyMe__card"
                        variants={cardVariants}
                        ref={(el) => (cardRefs.current[2] = el)}
                    >
                        <FontAwesomeIcon
                            className="whyMe__card-icon"
                            icon="fa-solid fa-magnifying-glass"
                        />
                        <h3 className="whyMe__card-title">
                            Référencement et Visibilité
                        </h3>
                        <p className="whyMe__card-text">
                            Un référencement optimisé et adapté aux évolutions
                            des algorithmes de recherche est crucial pour la
                            visibilité de votre site.
                        </p>
                    </motion.article>
                    <motion.article
                        className="whyMe__card"
                        variants={cardVariants}
                        ref={(el) => (cardRefs.current[3] = el)}
                    >
                        <FontAwesomeIcon
                            className="whyMe__card-icon"
                            icon="fa-solid fa-shield"
                        />
                        <h3 className="whyMe__card-title">Sécurité</h3>
                        <p className="whyMe__card-text">
                            Des mises à jour régulières et des audits de
                            sécurité protègent vos données et celles de vos
                            utilisateurs.
                        </p>
                    </motion.article>
                </motion.div>
                <FontAwesomeIcon
                    className="whyMe__chevron whyMe__chevron-right"
                    icon="fa-solid fa-chevron-right"
                    onClick={scrollRight}
                    ref={chevronRightRef}
                />
                <div className="bulletPoints">
                    {Array.from({ length: cardCount }).map((_, index) => (
                        <span
                            key={index}
                            className={`bulletPoints__singlePoint ${
                                index === activeIndex
                                    ? "bulletPoints__singlePoint-active"
                                    : ""
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyMeContainer;

// import { useEffect, useState, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { motion } from "framer-motion";

// const variants = {
//     initial: {
//         opacity: 0,
//         y: 100,
//     },
//     animate: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.3,
//             staggerChildren: 0.2,
//         },
//     },
// };

// const cardVariants = {
//     initial: {
//         opacity: 0,
//         y: 100,
//     },
//     animate: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.3,
//             staggerChildren: 0.4,
//         },
//     },
// };

// function WhyMeContainer() {
//     const [cardCount, setCardCount] = useState(0);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const wrapperRef = useRef(null);
//     const chevronLeftRef = useRef(null);
//     const chevronRightRef = useRef(null);
//     const cardRefs = useRef([]);

//     useEffect(() => {
//         const wrapper = wrapperRef.current;
//         const chevronLeft = chevronLeftRef.current;
//         const chevronRight = chevronRightRef.current;

//         const cards = cardRefs.current;
//         setCardCount(cards.length);

//         const checkScrollPosition = () => {
//             if (wrapper.scrollLeft > 0) {
//                 chevronLeft.classList.add("whyMe__chevron-visible");
//             } else {
//                 chevronLeft.classList.remove("whyMe__chevron-visible");
//             }

//             if (
//                 wrapper.scrollLeft + wrapper.clientWidth <
//                 wrapper.scrollWidth
//             ) {
//                 chevronRight.classList.add("whyMe__chevron-visible");
//             } else {
//                 chevronRight.classList.remove("whyMe__chevron-visible");
//             }

//             const cardWidth = wrapper.scrollWidth / cards.length;
//             setActiveIndex(Math.round(wrapper.scrollLeft / cardWidth));
//         };

//         wrapper.addEventListener("scroll", checkScrollPosition);
//         setTimeout(checkScrollPosition, 200);

//         return () => {
//             wrapper.removeEventListener("scroll", checkScrollPosition);
//         };
//     }, []);

//     const scrollLeft = () => {
//         wrapperRef.current.scrollBy({ left: -330, behavior: "smooth" });
//     };

//     const scrollRight = () => {
//         wrapperRef.current.scrollBy({ left: 330, behavior: "smooth" });
//     };

//     return (
//         <div className="whyMe">
//             <motion.div
//                 className="whyMe__title"
//                 variants={variants}
//                 initial="initial"
//                 whileInView="animate"
//                 viewport={{ once: true }}
//             >
//                 <motion.p variants={variants}>
//                     La <span>présence en ligne</span> est devenue{" "}
//                     <span>essentielle</span> pour toutes les entreprises, quelle
//                     que soit leur taille ou leur secteur.
//                 </motion.p>
//                 <motion.p variants={variants}>
//                     Pour maximiser <span>l&apos;impact</span> de votre site web,
//                     il est <span>crucial</span> de surveiller et de comprendre
//                     les éléments suivants :
//                 </motion.p>
//             </motion.div>

//             <div className="whyMe__container">
//                 <FontAwesomeIcon
//                     className="whyMe__chevron whyMe__chevron-left"
//                     icon="fa-solid fa-chevron-left"
//                     onClick={scrollLeft}
//                     ref={chevronLeftRef}
//                 />
//                 <motion.div
//                     className="whyMe__wrapper"
//                     variants={variants}
//                     initial="initial"
//                     whileInView="animate"
//                     viewport={{ once: true }}
//                     ref={wrapperRef}
//                 >
//                     {[
//                         "Maintenance et Efficacité",
//                         "Technologies à Jour",
//                         "Référencement et Visibilité",
//                         "Sécurité",
//                     ].map((title, index) => (
//                         <motion.article
//                             className="whyMe__card"
//                             variants={cardVariants}
//                             key={index}
//                             ref={(el) => (cardRefs.current[index] = el)}
//                         >
//                             <FontAwesomeIcon
//                                 className="whyMe__card-icon"
//                                 icon={
//                                     index === 0
//                                         ? "fa-solid fa-screwdriver-wrench"
//                                         : index === 1
//                                         ? "fa-solid fa-rotate"
//                                         : index === 2
//                                         ? "fa-solid fa-magnifying-glass"
//                                         : "fa-solid fa-shield"
//                                 }
//                             />
//                             <h3 className="whyMe__card-title">{title}</h3>
//                             <p className="whyMe__card-text">
//                                 {index === 0
//                                     ? "Des opérations de maintenance régulières pour maintenir la performance et l'efficacité de votre site sont indispensables."
//                                     : index === 1
//                                     ? "Une refonte complète peut s'avérer nécessaire pour rester compétitif grâce à des technologies à jour."
//                                     : index === 2
//                                     ? "Un référencement optimisé et adapté aux évolutions des algorithmes de recherche est crucial pour la visibilité de votre site."
//                                     : "Des mises à jour régulières et des audits de sécurité protègent vos données et celles de vos utilisateurs."}
//                             </p>
//                         </motion.article>
//                     ))}
//                 </motion.div>
//                 <FontAwesomeIcon
//                     className="whyMe__chevron whyMe__chevron-right"
//                     icon="fa-solid fa-chevron-right"
//                     onClick={scrollRight}
//                     ref={chevronRightRef}
//                 />
//                 <div className="bulletPoints">
//                     {Array.from({ length: cardCount }).map((_, index) => (
//                         <span
//                             key={index}
//                             className={`bulletPoints__singlePoint ${
//                                 index === activeIndex
//                                     ? "bulletPoints__singlePoint-active"
//                                     : ""
//                             }`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default WhyMeContainer;
