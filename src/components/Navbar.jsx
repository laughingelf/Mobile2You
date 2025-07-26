import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full left-0 z-50 bg-[#FFD447] shadow-md">
        {/* Brand Name */}
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl text-[#4C2E05] tracking-widest header-font"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <Link to='/'>
        
          Mobile2You
        </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-[#4C2E05] font-medium hover:text-[#F57921] transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 bg-[#F57921] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#D73F2A] transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#4C2E05] text-2xl"
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Nav Slide Down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#FFD447] flex flex-col items-center pb-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="py-2 text-[#4C2E05] font-semibold text-lg hover:text-[#F57921] transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-[#F57921] text-white px-6 py-2 rounded-full font-medium hover:bg-[#D73F2A] transition"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
