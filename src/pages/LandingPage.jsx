import CallToAction from "../components/CallToAction";
import GalleryPreview from "../components/Gallery";
import QuickIntro from "../components/Intro";
import LandingHero from "../components/LandingHero";
import ServicesPreview from "../components/ServicePreview";
import WhyChooseUs from "../components/WhyChooseUs";


const LandingPage = () => {

    return (
        <>
        <LandingHero />
        <QuickIntro />
        <ServicesPreview />
        <GalleryPreview />
        <WhyChooseUs />
        <CallToAction />
        </>
    )
}

export default LandingPage;