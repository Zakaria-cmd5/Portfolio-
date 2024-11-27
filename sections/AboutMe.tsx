import BackgroundCard from "@/components/cards/Background";
import ExperienceCard from "@/components/cards/Experience";
import MeCard from "@/components/cards/Me";
import ResumeCard from "@/components/cards/Resume";
import Heading from "@/components/heading/Heading";
import Card from "@/components/ui/Card";
import Gallery from "@/components/ui/Gallery";

const AboutMeSection = () => {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="02" title1="About" title2="Me" />
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
            <Card title="Instructor">Instructor</Card>
            <Card title="Certification">Certification</Card>
          </div>
          <div className="space-y-4">
            <Card title="Stack">Stack</Card>
            <ExperienceCard />
            <Card title="Education">Education</Card>
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
