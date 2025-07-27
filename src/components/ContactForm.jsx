const ContactForm = () => {
  return (
    <section className="bg-[#FFF9F0] text-[#4C2E05] px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 header-font">Get in Touch</h2>
        <p className="text-lg mb-8">
          Have a question, want to check availability, or just want to say hi? Drop us a message below.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="grid grid-cols-1 gap-6 text-left"
        >
          {/* Netlify hidden input */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <label className="block">
            Your Name
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full px-4 py-2 rounded-md border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#F57921]"
            />
          </label>

          <label className="block">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 rounded-md border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#F57921]"
            />
          </label>

          <label className="block">
            Message
            <textarea
              name="message"
              rows="5"
              required
              className="mt-1 w-full px-4 py-2 rounded-md border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#F57921]"
            ></textarea>
          </label>

          <button
            type="submit"
            className="mt-4 bg-[#F57921] text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-[#D73F2A] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
