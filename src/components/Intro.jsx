import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const QuickIntro = () => {
  return (
    <section className="bg-[#FFF9F0] text-[#4C2E05] px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        
        {/* TEXT */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 header-font">
            We Bring the Bar to You, Literally
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            Mobile 2 You is a mobile bar experience built into a custom horse trailer,
            ready to roll up to weddings, birthdays, and backyard bashes.
            Cocktails, mocktails, and good vibes included.
          </p>
          <Link
            to="/about"
            className="inline-block bg-[#F57921] text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-[#D73F2A] transition"
          >
            Learn More
          </Link>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="/img/introImg.png"
            alt="Mobile 2 You illustration"
            className="max-w-xs md:max-w-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default QuickIntro;
