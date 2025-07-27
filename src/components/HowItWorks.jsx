import { motion } from "framer-motion";
import { FaRegEnvelope, FaCocktail, FaBoxOpen, FaLaughBeam } from "react-icons/fa";

const steps = [
  {
    icon: <FaRegEnvelope size={36} className="text-[#D73F2A]" />,
    title: "Reach Out",
    description: "Tell us about your event, and we’ll check availability.",
  },
  {
    icon: <FaBoxOpen size={36} className="text-[#D73F2A]" />,
    title: "Customize Your Package",
    description: "Pick one of our packages or mix and match to fit your vibe.",
  },
  {
    icon: <FaCocktail size={36} className="text-[#D73F2A]" />,
    title: "You Bring the Booze",
    description: "We bring the bar and the fun—you supply the spirits (per Texas law).",
  },
  {
    icon: <FaLaughBeam size={36} className="text-[#D73F2A]" />,
    title: "We Handle the Rest",
    description: "From setup to cleanup, we’ve got it covered so you can enjoy the party.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#FFF9F0] text-[#4C2E05] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4 header-font"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Simple. Fun. Done.
        </motion.h2>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Here’s how Mobile2You brings the bar to your bash without the hassle.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-base leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
