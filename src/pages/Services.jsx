import HeroCommon from '../components/HeroCommon'
import HowItWorks from '../components/HowItWorks';
import PackagesSection from '../components/Packages';
import ServicesOverview from '../components/ServiceOverview';
import SoftCTA from '../components/SoftCTA';

const Services = () => {

    return (
        <>
        <HeroCommon
        title="What We Bring to the Party"
        subtitle="From signature cocktails to custom mocktail bars, our mobile setup transforms any event into a celebration. See what we offer."
        imageSrc="/img/introImg.png"
        primaryCtaText="Book Now"
        primaryCtaLink="/contact"
        secondaryCtaText="FAQs"
        secondaryCtaLink="/about"
        />
        <ServicesOverview />
        <PackagesSection  />
        <HowItWorks />
        <SoftCTA
        title="Let’s Get the Party Started!"
        subtitle="Our team is ready to bring the bar to you — just say when."
        primaryCtaText="Check Availability"
        primaryCtaLink="/contact"
        secondaryCtaText="Meet the Team"
        secondaryCtaLink="/about"
        />
        </>
    )
}

export default Services;