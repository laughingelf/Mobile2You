import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What types of events do you serve?",
    answer: "Weddings, birthdays, corporate events, backyard parties — we bring the bar wherever the fun is!",
  },
  {
    question: "Do you provide alcohol or do we?",
    answer: "It depends on your location and preferences. We’ll work with you to stay compliant and make it smooth.",
  },
  {
    question: "How far do you travel?",
    answer: "We’re based in the DFW area and open to traveling for special occasions. Let’s chat about your location!",
  },
  {
    question: "Can you do non-alcoholic events?",
    answer: "Absolutely. We create stunning mocktails and can cater to all ages and preferences.",
  },
  {
    question: "Do you require a deposit?",
    answer: "Yes, we typically require a 25% deposit to reserve your date. The rest is due before your event.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF9F0] text-[#4C2E05] px-6 py-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 header-font"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Have more questions? We’ve got answers.
        </motion.p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-[#FFD447] rounded-xl p-4 shadow-sm cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  className="text-sm text-[#7A5B2F] mt-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
