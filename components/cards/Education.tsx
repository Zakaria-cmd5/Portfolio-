import Card from "../ui/Card";
import { TimeLine, TimeLineItem } from "../ui/TimeLine";

const EducationCard = () => {
  const educationData = [
    {
      date: "2018 - 2024",
      title: "Computer Engineering",
      subTitle: "CEN",
    },
  ];

  return (
    <Card title="My Education">
      <TimeLine>
        {educationData.map((edu, i) => (
          <TimeLineItem
            key={i}
            date={edu.date}
            subTitle={edu.subTitle}
            title={edu.title}
          />
        ))}
      </TimeLine>
    </Card>
  );
};

export default EducationCard;
