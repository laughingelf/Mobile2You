import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "/img/pholder.png",
    alt: "Mobile bar setup with drinks and sunset background",
  },
  {
    src: "/img/pholder.png",
    alt: "Mobile trailer bar with lights at night event",
  },
  {
    src: "/img/pholder.png",
    alt: "Daytime event with trailer, drinks, and outdoor furniture",
  },
];

const GalleryPreview = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="bg-[#FFD447] px-6 py-20 text-[#4C2E05]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          See Us In Action <span className="text-[#D73F2A] header-font">(Coming Soon!)</span>
        </motion.h2>
        <motion.p
          className="text-xl mx-2 md:mx-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          We’re still gathering photos from all the amazing events we’ve been part of.
          Until then, here’s a sneak peek of the vibe we bring to your party.
        </motion.p>
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="rounded-xl overflow-hidden shadow-lg bg-[#FFF9F0] cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
            }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            onClick={() => setIndex(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* MODERN LIGHTBOX */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  );
};

export default GalleryPreview;
