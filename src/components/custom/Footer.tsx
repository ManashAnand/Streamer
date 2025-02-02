import { motion } from "motion/react";
import { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const parentVariants = {
    hidden: { y: 200, opacity: 0 }, 
    visible: {
      y: 0, 
      opacity: 1,
      transition: {
        duration: 1.5, 
        ease: "easeOut",
        when: "beforeChildren", 
        staggerChildren: 0.3, 
        delayChildren: 0.5, 
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <footer className="text-white body-font mt-2 rounded-t-sm">
      {open && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={parentVariants} // ✅ Parent animates first
          className="container px-5 py-24 mx-auto flex md:items-center lg:items-start border border-green-400/10 md:flex-row md:flex-nowrap flex-wrap flex-col"
        >
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <span className="text-green-500">Streamify</span>
            <p className="mt-2 text-sm text-gray-500">
              Always there for you when it&apos;s about streaming
            </p>
          </div>

          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-green-400 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>

                <motion.ul variants={parentVariants} className="list-none mb-10">
                  {["First Link", "Second Link", "Third Link", "Fourth Link"].map((link, i) => (
                    <motion.li
                      key={i}
                      variants={childVariants} 
                      className="text-white/60 hover:text-green-200 cursor-pointer"
                    >
                      {link}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div id="bottomName" className="bg-green-100 rounded-t-sm" onViewportEnter={() => setOpen(true)}>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 Streamify —
            <a href="https://twitter.com/manashanand2" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
              @Manash
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
