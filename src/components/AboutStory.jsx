import { motion } from "framer-motion";

const AboutStory = () => {
  return (
    <section className="bg-[#FFF9F0] text-[#4C2E05] px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* IMAGE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/img/owner-pholder.png"
            alt="Our Story Illustration"
            className="w-full max-w-lg rounded-lg shadow-lg shadow-gray-400"
            loading="lazy"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 header-font">
            How It All Started
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Mobile 2 You began with a dream to bring something fresh, fun, and
            unforgettable to local events. What started as a simple idea — turn a
            horse trailer into a full-service bar — quickly became a community
            favorite.
          </p>
          <p className="text-lg leading-relaxed">
            We believe in celebrating the little things, serving up big smiles,
            and keeping the good times rolling — wherever your event takes us.
          </p>

          {/* OPTIONAL FUN FACTS BLOCK */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#FFD447] p-4 rounded-xl shadow-md shadow-gray-400">
              <span className="block text-xl font-bold">🐎 Custom Trailer Build</span>
              <span className="text-sm">Repurposed by hand for mobile magic</span>
            </div>
            <div className="bg-[#FFD447] p-4 rounded-xl shadow-md shadow-gray-400">
              <span className="block text-xl font-bold">🍹 Cocktail Ready</span>
              <span className="text-sm">Alcoholic & Non-Alcoholic Options</span>
            </div>
            <div className="bg-[#FFD447] p-4 rounded-xl shadow-md shadow-gray-400">
              <span className="block text-xl font-bold">🎉 Built for Vibes</span>
              <span className="text-sm">Weddings, birthdays, bashes & more</span>
            </div>
            <div className="bg-[#FFD447] p-4 rounded-xl shadow-md shadow-gray-400">
              <span className="block text-xl font-bold">🛻 Fully Mobile</span>
              <span className="text-sm">We come to you — anywhere in DFW</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory;
