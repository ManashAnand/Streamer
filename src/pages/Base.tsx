import CTABtn from "@/components/custom/CTABtn";
import { motion } from "motion/react"
import { useState } from "react";

const Base = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    const variants = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: -40 },
    }

    const IconVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: -40 },

    }

    const transition = { duration: 4, ease: "easeInOut" }
    console.log(animationComplete)
    return (
        <>
            <div className="bg-red-100/5 min-h-[70vh] flex justify-center items-center">

                <motion.svg
                    className="w-72 h-96"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 18"
                    width="1em"
                    height="1em"
                    fill="#16a34a "
                >
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={transition}
                        // fill="#0ed30e"
                        d="M18.07.169a.91.91 0 0 0-.848-.114l.006-.002L6.151 3.991a.92.92 0 0 0-.613.869V17.7a3.85 3.85 0 0 0-1.846-.471h-.001a3.553 3.553 0 0 0-3.692 3.376v.008a3.555 3.555 0 0 0 3.699 3.385h-.007a3.553 3.553 0 0 0 3.692-3.376V7.731l9.23-3.223v8.973a3.86 3.86 0 0 0-1.846-.47h-.001a3.55 3.55 0 0 0-3.691 3.376v.008a3.554 3.554 0 0 0 3.699 3.385h-.007l.105.002a3.62 3.62 0 0 0 3.513-2.74l.005-.025a.9.9 0 0 0 .069-.34V.923a.92.92 0 0 0-.388-.752l-.003-.002z"
                        stroke="white"
                        strokeWidth="0.2"
                        onAnimationComplete={() => setAnimationComplete(true)}
                    ></motion.path>
                </motion.svg>

                {
                    animationComplete && (
                        <>

                            <motion.div variants={variants} initial="hidden" animate="visible" className="absolute text-5xl top-[20%] font-bold text-green-500/80">Streamify</motion.div>
                            <motion.div variants={IconVariants} initial="hidden" animate="visible" className="absolute text-2xl top-[65%] text-bold text-green-200/80 underline-offset-4">
                                <div className="mx-4 text-sm mt-10 sm:mx-0 sm:text-xl sm:mt-0">

                                    All in one solution for tracking your streaming data
                                </div>
                                <CTABtn href='/dashboard'>Dashboard</CTABtn>

                            </motion.div>

                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                width="1em"
                                height="1em"
                                className="blur-sm hidden sm:block absolute animate-bounce text-2xl top-[20%] left-[20%] text-bold text-green-500/80 underline-offset-4 w-32 h-44"
                                variants={variants} initial="hidden" animate="visible"
                            >
                                <g fill="#16a34a">
                                    <path d="m14.36 3.004l-6.14.8c-.32.04-.56.32-.56.64v7.62c-.57-.2-1.2-.28-1.86-.21c-2.05.22-3.67 1.92-3.8 3.98a4.27 4.27 0 0 0 4.27 4.55c2.36 0 4.28-1.91 4.28-4.28c0-.09 0-.18-.01-.27v-7.83c0-.28.21-.52.49-.56l3.46-.45a.53.53 0 0 0 .46-.53v-2.93a.52.52 0 0 0-.59-.53m15.04 2.37l-6.14.8c-.32.04-.56.31-.56.63v10.01c-.57-.2-1.2-.28-1.86-.21c-2.05.22-3.67 1.92-3.8 3.98a4.27 4.27 0 0 0 4.27 4.55c2.36 0 4.28-1.91 4.28-4.28c0-.09 0-.18-.01-.27v-10.21c0-.28.21-.52.49-.56l3.46-.45c.27-.04.47-.26.47-.53v-2.94c0-.32-.28-.56-.6-.52"></path>
                                    <path d="m13.09 10.654l6.14-.8c.32-.05.6.2.6.52v2.93c0 .27-.2.5-.46.53l-3.46.45a.57.57 0 0 0-.49.56v10.22c.01.09.01.18.01.27c0 2.37-1.92 4.28-4.28 4.28c-2.46 0-4.43-2.06-4.27-4.55c.12-2.06 1.74-3.75 3.79-3.97c.66-.07 1.29.01 1.86.21v-10.01c0-.33.24-.6.56-.64"></path>
                                </g>
                            </motion.svg>
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="blur-sm hidden sm:block absolute animate-bounce text-2xl top-[60%] right-[30%] text-bold text-green-500/80 underline-offset-4 w-32 h-44"

                                variants={variants} initial="hidden" animate="visible"
                            >
                                <path
                                    fill="currentColor"
                                    d="M13 11V7.5l2.2-2.21c.8-.79.95-2.05.39-3.03A2.47 2.47 0 0 0 13.45 1c-.21 0-.45.03-.64.09C11.73 1.38 11 2.38 11 3.5v3.24L7.86 9.91a5.95 5.95 0 0 0-1.25 6.43c.77 1.9 2.45 3.21 4.39 3.55v.61c0 .26-.23.5-.5.5H9v2h1.5c1.35 0 2.5-1.11 2.5-2.5V20c2.03 0 4.16-1.92 4.16-4.75c0-2.3-1.92-4.25-4.16-4.25m0-7.5c0-.23.11-.41.32-.47c.22-.06.45.03.56.23a.5.5 0 0 1-.08.61l-.8.86zm-2 8c-.97.64-1.7 1.74-1.96 2.76l1.96.52v3.05a3.86 3.86 0 0 1-2.57-2.26c-.59-1.46-.27-3.12.83-4.24L11 9.5zm2 6.5v-5.06c1.17 0 2.18 1.1 2.18 2.31C15.18 17 13.91 18 13 18"
                                ></path>
                            </motion.svg>

                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                width="1em"
                                height="1em"
                                className="blur-sm hidden sm:block absolute animate-bounce text-2xl top-[20%] right-[15%] text-bold text-green-500/80 underline-offset-4 w-32 h-44"

                                variants={variants} initial="hidden" animate="visible"
                            >
                                <path
                                    fill="currentColor"
                                    d="M11.68 4.8c-.16-.07-.33-.13-.51-.19l1.91-3.3L12 .69L9.9 4.31A11.6 11.6 0 0 0 8 4.16a12 12 0 0 0-1.82.14L4.1.69L3 1.31l1.91 3.28a4.5 4.5 0 0 0-.59.21c-1.58.64-1.82 1.52-1.82 2v5.9c0 .46.24 1.34 1.82 2a9.9 9.9 0 0 0 3.68.61a9.9 9.9 0 0 0 3.68-.63c1.58-.65 1.82-1.53 1.82-2V6.79c0-.47-.24-1.35-1.82-1.99M4.79 6a7 7 0 0 1 .76-.25l.79 1.37l1.08-.63l-.56-1A11 11 0 0 1 8 5.41a12 12 0 0 1 1.23.07l-.56 1l1.08.63l.78-1.34c1.1.3 1.72.76 1.72 1.06s-.32.54-1 .83a8.7 8.7 0 0 1-3.25.5c-2.64 0-4.25-.89-4.25-1.37c0-.21.32-.54 1.04-.79m6.42 7.57a8.7 8.7 0 0 1-3.21.49c-2.64 0-4.25-.89-4.25-1.37v-1.23a6 6 0 0 0 .57.27a9.9 9.9 0 0 0 3.68.63a9.9 9.9 0 0 0 3.68-.63a6 6 0 0 0 .57-.27v1.23c0 .2-.32.54-1.04.83zm0-2.95a8.7 8.7 0 0 1-3.21.49c-2.64 0-4.25-.89-4.25-1.37V8.51a6 6 0 0 0 .57.27A9.9 9.9 0 0 0 8 9.41a9.9 9.9 0 0 0 3.68-.63a6 6 0 0 0 .57-.27v1.23c0 .2-.32.54-1.04.83z"
                                ></path>
                            </motion.svg>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Base
