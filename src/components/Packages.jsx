import { motion } from "framer-motion";
import { FaCocktail, FaGlassCheers, FaPlus } from "react-icons/fa";

const packages = [
  {
    title: "Pour Service Only",
    icon: <FaGlassCheers className="text-4xl text-[#D73F2A]" />,
    description:
      "Perfect for weddings, birthdays, and backyard bashes. You supply the alcohol—we bring the trailer, licensed bartenders, mixers, cups, and ice.",
  },
  {
    title: "Mocktail Party",
    icon: <FaCocktail className="text-4xl text-[#D73F2A]" />,
    description:
      "Ideal for family-friendly events. We craft fresh, alcohol-free drinks with flair. Great for baby showers, school events, and community functions.",
  },
  {
    title: "Add-On Enhancements",
    icon: <FaPlus className="text-4xl text-[#D73F2A]" />,
    description:
      "Customize your experience with drink walls, personalized signage, fruit garnishes, themed decor, and more.",
  },
];

const PackagesSection = () => {
  return (
    <section className="bg-[#FFF9F0] text-[#4C2E05] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-4 header-font"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Event Packages
        </motion.h2>
        <motion.p
          className="text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          All alcohol must be provided by the client in accordance with Texas law. We handle the service, setup, and good vibes.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-lg text-left hover:shadow-xl transition cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{pkg.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
            <p className="text-base leading-relaxed">{pkg.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.a
          href="/contact"
          className="inline-block bg-[#F57921] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#D73F2A] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Quote
        </motion.a>
      </div>
    </section>
  );
};

export default PackagesSection;
