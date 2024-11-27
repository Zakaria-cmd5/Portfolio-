import BackgroundCard from "@/components/cards/Background";
import MeCard from "@/components/cards/Me";
import ResumeCard from "@/components/cards/Resume";
import Heading from "@/components/heading/Heading";
import Card from "@/components/ui/Card";

const AboutMeSection = () => {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="02" title1="About" title2="Me" />
      <div className="space-y-4 py-8">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <MeCard />
          <ResumeCard />
          <BackgroundCard />
          <Card title="Gallery" classNames="2xl:hidden">
            Gallery
          </Card>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <Card title="Instructor">Instructor</Card>
            <Card title="Certification">Certification</Card>
          </div>
          <div className="space-y-4">
            <Card title="Stack">Stack</Card>
            <Card title="Experience">Experience</Card>
            <Card title="Education">Education</Card>
          </div>
          <div className="hidden 2xl:flex">
            <Card title="Gallery">Gallery</Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
