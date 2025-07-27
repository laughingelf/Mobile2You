import ContactForm from "../components/ContactForm";
import HeroCommon from "../components/HeroCommon";

const Contact = () => {

    return (
        <>
        <HeroCommon
        title="Let’s Make Your Event Unforgettable"
        subtitle="Have questions or want to check availability? Reach out and let’s chat about how we can bring the bar to you."
        imageSrc="/img/introImg.png"
        primaryCtaText="Call or Text"
        primaryCtaLink="/contact" // Can later anchor to phone or use `tel:` if needed
        secondaryCtaText="View Services"
        secondaryCtaLink="/services"
        />
        <ContactForm />
        </>
    )
}

export default Contact;