import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4C2E05] text-[#FFF9F0] px-6 py-10 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
        {/* Brand & Tagline */}
        <div>
          <h3 className="text-2xl font-bold mb-2 tracking-wide header-font">Mobile2You</h3>
          <p className="text-sm">
            Bringing the bar to your next event — custom trailer, crafted drinks, zero stress.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3 header-font">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#FFD447]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#FFD447]">About</Link></li>
            <li><Link to="/services" className="hover:text-[#FFD447]">Services</Link></li>
            <li><Link to="/contact" className="hover:text-[#FFD447]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-lg mb-3 header-font">Get in Touch</h4>
          <div className="flex items-center gap-3 mb-2 text-sm">
            <FaEnvelope />
            <span>hello@mobile2you.com</span>
          </div>
          <div className="flex gap-4 mt-3 text-xl">
            <a href="#" aria-label="Instagram" className="hover:text-[#FFD447]">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#FFD447]">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-[#FFD447] mt-10">
        &copy; {new Date().getFullYear()} Mobile 2 You. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
