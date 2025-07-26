import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Full-Service Bar",
    description: "Alcohol packages with bartenders & trailer setup.",
    icon: "🍹",
  },
  {
    title: "Mocktail Bar",
    description: "Fun, fresh non-alcoholic drinks for all ages.",
    icon: "🧃",
  },
  {
    title: "Signature Cocktails",
    description: "Custom menus tailored to your event vibe.",
    icon: "🍸",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-white text-[#4C2E05] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 header-font">
          What We Offer
        </h2>
        <p className="text-xl text-[#6b4c20]">
          Packages to match the party — drinks, vibes, and Mobile 2 You flair.
        </p>
      </div>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#FFF9F0] rounded-2xl shadow-md p-8 flex flex-col items-center text-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 12px 25px rgba(0,0,0,0.1)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-base text-[#5e4520]">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA BUTTON */}
      <div className="text-center mt-12">
        <Link
          to="/services"
          className="inline-block bg-[#F57921] text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-[#D73F2A] transition"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesPreview;
