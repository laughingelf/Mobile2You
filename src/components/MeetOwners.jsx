import { motion } from "framer-motion";

const MeetTheOwners = () => {
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
          Meet the People Behind Mobile2You
        </motion.h2>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Real people. Real passion. Serving smiles and drinks across every mile.
        </motion.p>
      </div>

      {/* OWNER CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {[1, 2].map((_, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/owners-placeholder.webp" // Swap this when you have a real photo
              alt="Owner Portrait"
              className="w-40 h-40 mx-auto mb-4 rounded-full object-cover border-4 border-[#FFD447]"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mb-1">Owner Name</h3>
            <p className="text-sm italic text-[#7A5B2F] mb-3">Co-Founder & Head Bartender</p>
            <p className="text-base mb-2">
              Loves experimenting with drinks, chatting with guests, and creating unforgettable nights.
            </p>
            <p className="text-sm text-[#D73F2A] font-medium">🍹 Favorite Drink: Jalapeño Margarita</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheOwners;
