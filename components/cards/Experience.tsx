import Card from "../ui/Card";
import { TimeLine, TimeLineItem } from "../ui/TimeLine";

const ExperienceCard = () => {
  const experienceData = [
    {
      date: "MAY 2023 - JAN 2024",
      title: "Next.js/React.js developer",
      subTitle: "Mostaql",
      tag: "Remote",
    },
    {
      date: "MAY 2024 - AUG 2024",
      title: "Next.js developer",
      subTitle: "Mad Solutions",
      tag: "Remote",
    },
  ];

  return (
    <Card title="My Experience">
      <TimeLine>
        {experienceData.map((exp, i) => (
          <TimeLineItem
            key={i}
            date={exp.date}
            subTitle={exp.subTitle}
            title={exp.title}
            tag={exp.tag}
          />
        ))}
      </TimeLine>
    </Card>
  );
};

export default ExperienceCard;
