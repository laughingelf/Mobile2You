import { motion } from "framer-motion";

const reasons = [
  {
    emoji: "🍹",
    title: "Custom-Tailored Bar Experience",
    text: "We match your party vibe with signature drinks and setups that are anything but basic.",
  },
  {
    emoji: "🚛",
    title: "We Come to You",
    text: "Setup, service, and cleanup — you just show up and sip. We’ll handle the rest.",
  },
  {
    emoji: "❤️",
    title: "Locally-Owned & Operated",
    text: "Born in Texas, raised on good times. We love serving our local community.",
  },
];

const WhyChooseUs = () => {
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
          Why Choose Us?
        </motion.h2>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          No fluff — just honest service, local flavor, and great drinks.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-[#FFD447] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300 cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-4">{reason.emoji}</div>
            <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
            <p className="text-base">{reason.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
