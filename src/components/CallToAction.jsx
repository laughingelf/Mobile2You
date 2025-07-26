import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-[#F57921] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-4 header-font"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Ready to Get the Party Started?
        </motion.h2>

        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Whether it’s a wedding, birthday, or backyard bash, Mobile 2 You is ready to roll!
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="bg-white text-[#F57921] px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#FFF9F0] transition"
          >
            Book Now
          </Link>
          <Link
            to="/services"
            className="border-2 border-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-[#F57921] transition"
          >
            See Packages
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
