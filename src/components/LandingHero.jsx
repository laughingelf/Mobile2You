import { motion } from "framer-motion";

const LandingHero = () => {
  return (
    <section className="bg-[#FFD447] text-[#4C2E05] py-16 px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between">
      {/* TEXT SECTION */}
      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 header-font">
          Your Event Just Got an Upgrade
        </h1>
        <p className="text-xl mb-6">
          <span className="font-bold header-font">Mobile2You</span> brings the bar to you! Cocktails, mocktails, and good
          times served straight from our custom horse trailer.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <motion.button
            className="bg-[#F57921] text-white px-6 py-3 rounded-xl text-lg hover:bg-[#D73F2A] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
          <motion.button
            className="border-2 border-[#4C2E05] text-[#4C2E05] px-6 py-3 rounded-xl text-lg hover:bg-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Menu
          </motion.button>
        </div>
      </motion.div>

      {/* IMAGE SECTION */}
      <motion.div
        className="w-78 md:w-[600px] mb-8 md:mb-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        >
        <motion.img
            src="/img/mobile2you_logo.webp"
            alt="Mobile 2 You Trailer Logo"
            className="w-full h-auto"
            animate={{ y: [0, -5, 0] }}
            transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 1.2, // allows initial fade-in to finish first
            }}
        />
        </motion.div>

    </section>
  );
};

export default LandingHero;
