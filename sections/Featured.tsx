import FeaturedCard from "@/components/cards/FeaturedCard";
import Heading from "@/components/heading/Heading";

const FeaturedSection = () => {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="01" title1="Featured" title2="Work" />
      <FeaturedCard active tag="Any" title="Any" video="" />
    </div>
  );
};

export default FeaturedSection;
