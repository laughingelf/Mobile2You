import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SoftCTA = () => {
  return (
    <section className="bg-[#FFD447] text-[#4C2E05] px-6 py-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 header-font">
          Ready to Raise the Bar at Your Next Event?
        </h2>
        <p className="text-lg mb-8">
          Let Mobile 2 You turn your celebration into a one-of-a-kind experience.
          Whether it’s a wedding, party, or just a fun weekend — we’ve got you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="bg-[#F57921] text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-[#D73F2A] transition"
          >
            Book Your Date
          </Link>
          <Link
            to="/services"
            className="border-2 border-[#4C2E05] text-[#4C2E05] px-6 py-3 rounded-full font-semibold text-base hover:bg-white transition"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default SoftCTA;
