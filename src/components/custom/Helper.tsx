import { motion } from 'motion/react';
import { lazy } from 'react';
const Gallary = lazy(() => import('./Gallary'));
const Helper = () => {

    const variants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: -40 },
    }


    return (
        <>
            <section className="text-gray-600 body-font mt-10">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <motion.div variants={variants} initial="hidden" animate="visible" className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-green-600 lg:w-1/3 lg:mb-0 mb-4">
                            <span className='absolute top-[90%]'>

                                <motion.svg viewBox="0 0 360 61" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="w-72 h-72  md:-translate-y-10"
                                >
                                    <motion.path initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1, transition: { duration: 4 } }} d="M82.6123 39.4041C89.1905 36.0799 95.1668 32.856 101.301 29.9759C114.873 23.5997 128.731 18.0545 144.181 19.5877C148.667 20.0319 153.238 20.9776 157.466 22.525C168.673 26.6087 178.849 23.571 188.895 18.7853C202.353 12.3661 216.297 9.05614 231.159 12.5523C244.975 15.8049 257.787 12.5667 270.542 7.48C277.479 4.71458 284.673 2.50799 291.911 0.659595C302.201 -1.96254 309.954 3.7259 317.951 9.05614C320.832 10.9762 325.275 12.1511 328.585 11.5063C338.904 9.51466 349.022 6.50565 360 3.68291C350.011 15.9769 338.073 23.1125 322.552 21.7083C318.023 21.2928 313.222 18.3984 309.539 15.4037C303.892 10.8186 298.073 9.80123 291.481 11.8789C282.38 14.7589 273.251 17.5674 264.322 20.9202C253.244 25.0755 242.123 24.9896 230.772 22.654C217.917 20.0032 205.721 22.2098 194.083 28.0129C181.816 34.1312 169.505 37.2262 155.732 32.1252C143.106 27.4541 130.294 28.2851 118.026 34.5467C107.75 39.791 97.3309 44.7201 87.0265 49.907C83.3146 51.7697 79.4738 53.7471 75.7045 50.9243C72.179 48.2735 70.7172 44.5194 71.5484 39.7623C72.9816 31.6667 71.2904 30.4631 63.3364 32.0679C49.2198 34.9336 37.5395 42.6997 25.7017 50.2222C20.6713 53.4175 15.7986 56.8707 10.6249 59.8081C8.81908 60.8397 6.1534 61.2839 4.17565 60.8111C2.49885 60.4099 0.306098 58.4469 0.0337985 56.885C-0.238501 55.3519 1.18034 52.6724 2.64216 51.827C15.9132 44.0896 29.2416 36.4525 42.7849 29.2308C48.1449 26.3651 53.9492 23.8863 59.8538 22.568C74.8447 19.2295 80.8209 23.7716 82.5837 39.4328L82.6123 39.4041Z" stroke='white'
                                        strokeWidth="2" />
                                </motion.svg>

                            </span>
                            Master Analytic of Streaming

                        </h1>


                        <p className="mt-20 sm:mt-0 lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-white/60">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                    </motion.div>
                    <Gallary />
                </div>
            </section>
        </>
    )
}

export default Helper
