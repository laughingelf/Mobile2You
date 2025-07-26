import AboutStory from "../components/AboutStory";
import HeroCommon from "../components/HeroCommon";
import MeetTheOwners from '../components/MeetOwners'
import WhyChooseUs from '../components/WhyChooseAbout'
import FAQ from '../components/Faq'
import SoftCTA from '../components/SoftCTA'


const About = () => {

    return (
        <>
      <HeroCommon
        title="About Mobile 2 You"
        subtitle="We’re a mobile bar service with a Texas twist. Mixing up drinks, memories, and backyard fun across DFW!"
        imageSrc="/img/introImg.png"
        primaryCtaText="View Services"
        primaryCtaLink="/services"
        secondaryCtaText="Book Now"
        secondaryCtaLink="/contact"
        />
        <AboutStory />
        <MeetTheOwners />
        <WhyChooseUs />
        <FAQ />
        <SoftCTA />
        </>
    )
}

export default About;