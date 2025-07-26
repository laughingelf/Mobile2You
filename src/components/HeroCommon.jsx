import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroCommon = ({
  title = "Your Title Here",
  subtitle = "Your supporting text goes here. Talk about your brand, your value, or your message.",
  imageSrc = "/img/placeholder.webp",
  imageAlt = "Hero illustration",
  reverse = false,
  primaryCtaText = null,
  primaryCtaLink = null,
  secondaryCtaText = null,
  secondaryCtaLink = null,
}) => {
  return (
    <section className="bg-[#FFF9F0] px-6 py-20 text-[#4C2E05]">
      <div
        className={`max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT SIDE */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 header-font">{title}</h1>
          <p className="text-lg">{subtitle}</p>

          {(primaryCtaText || secondaryCtaText) && (
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
              {primaryCtaText && primaryCtaLink && (
                <Link
                  to={primaryCtaLink}
                  className="bg-[#F57921] text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-[#D73F2A] transition"
                >
                  {primaryCtaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  to={secondaryCtaLink}
                  className="border-2 border-[#4C2E05] text-[#4C2E05] px-6 py-3 rounded-full text-base font-semibold hover:bg-white transition"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          )}
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full max-w-xs md:max-w-sm"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCommon;
