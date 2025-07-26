import { motion } from "framer-motion";
import { FaCocktail, FaHorseHead, FaGlassCheers, FaSmile } from "react-icons/fa";

const features = [
  {
    icon: <FaCocktail size={40} className="text-[#D73F2A] mb-3" />,
    title: "Custom Cocktails",
    description: "Crafted drink menus tailored to your event — mocktails too!",
  },
  {
    icon: <FaHorseHead size={40} className="text-[#D73F2A] mb-3" />,
    title: "Horse Trailer Vibe",
    description: "A rustic, unforgettable setup that turns heads and photos pop!",
  },
  {
    icon: <FaGlassCheers size={40} className="text-[#D73F2A] mb-3" />,
    title: "All Occasions",
    description: "From weddings to backyard bashes — we bring the party to you.",
  },
  {
    icon: <FaSmile size={40} className="text-[#D73F2A] mb-3" />,
    title: "Friendly Team",
    description: "Run by folks who care about every guest having a great time.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white px-6 py-20 text-[#4C2E05]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4 header-font"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Sets Us Apart
        </motion.h2>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          From custom cocktails to unforgettable vibes, here’s why guests love us.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-[#FFF9F0] rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-md text-[#7A5B2F] leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
