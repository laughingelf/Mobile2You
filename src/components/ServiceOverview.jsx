import { motion } from "framer-motion";
import { FaGlassCheers, FaBeer, FaChild, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaGlassCheers className="text-4xl text-[#F57921] mb-4" />,
    title: "Full Bar Setup",
    description:
      "We roll in with the trailer, professional bartenders, mixers, garnish, and the vibe. All you do is raise your glass.",
  },
  {
    icon: <FaBeer className="text-4xl text-[#F57921] mb-4" />,
    title: "BYOB Bar Service",
    description:
      "You provide the alcohol — we bring the trailer, ice, staff, and everything else. Perfect for keeping it custom.",
  },
  {
    icon: <FaChild className="text-4xl text-[#F57921] mb-4" />,
    title: "Mocktail & Kid Zone",
    description:
      "For family-friendly events, we serve up bubbly mocktails and sweet treats everyone can enjoy.",
  },
  {
    icon: <FaStar className="text-4xl text-[#F57921] mb-4" />,
    title: "Add-On Extras",
    description:
      "Think custom signage, photo ops, signature drink menus, or theme-based decor. Let's get creative!",
  },
];

const ServicesOverview = () => {
  return (
    <section className="bg-[#FFF9F0] text-[#4C2E05] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-12 header-font"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-block bg-[#F57921] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#D73F2A] transition"
          >
            Book Your Event
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
