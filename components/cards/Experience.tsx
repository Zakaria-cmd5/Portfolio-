import Card from "../ui/Card";
import { TimeLine, TimeLineItem } from "../ui/TimeLine";

const ExperienceCard = () => {
  return (
    <Card title="My Experience">
      <TimeLine>
        <TimeLineItem
          date="2022-2023"
          title="Full Stack Engineer"
          subTitle="Toptal"
          link=""
        />
        <span>b</span>
      </TimeLine>
    </Card>
  );
};

export default ExperienceCard;
