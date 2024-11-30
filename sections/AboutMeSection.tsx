import BackgroundCard from "@/components/cards/BackgroundCard";
import CertificationsCard from "@/components/cards/CertificationsCard";
import EducationCard from "@/components/cards/EducationCard";
import ExperienceCard from "@/components/cards/ExperienceCard";
import MeCard from "@/components/cards/MeCard";
import ResumeCard from "@/components/cards/ResumeCard";
import StackCard from "@/components/cards/StackCard";
import Heading from "@/components/heading/Heading";
import Gallery from "@/components/ui/Gallery";

const AboutMeSection = () => {
  return (
    <div className="pt-24 px-3 lg:px-8" id="about">
      <Heading number="01" title1="About" title2="Me" />
      <div className="space-y-4 py-8">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <MeCard />
          <ResumeCard />
          <BackgroundCard />
          <div className="2xl:hidden">
            <Gallery />
          </div>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <CertificationsCard />
          </div>
          <div className="space-y-4">
            <StackCard />
            <ExperienceCard />
            <EducationCard />
          </div>
          <div className="hidden 2xl:flex">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
