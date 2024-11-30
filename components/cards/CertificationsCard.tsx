import Card from "../ui/Card";
import { TimeLine, TimeLineItem } from "../ui/TimeLine";

const CertificationsCard = () => {
  const educationData = [
    {
      date: "2021 - 2021",
      title: "Full Stack web bootcamp",
      subTitle: "Angela Yu Constructor",
      tag: "Udemy",
    },
    {
      date: "2022 - 2022",
      title: "React.Js",
      subTitle: "Maxmillain Constructor",
      tag: "Udemy",
    },
    {
      date: "2023 - 2023",
      title: "React.Js",
      subTitle: "Mosh hamedani Constructor",
      tag: "Code With Mosh",
    },
    {
      date: "2023 - 2023",
      title: "Next.Js",
      subTitle: "Mosh hamedani Constructor",
      tag: "Code With Mosh",
    },
  ];

  return (
    <Card title="My Certifications">
      <TimeLine>
        {educationData.map((cer, i) => (
          <TimeLineItem
            key={i}
            date={cer.date}
            subTitle={cer.subTitle}
            title={cer.title}
            tag={cer.tag}
          />
        ))}
      </TimeLine>
    </Card>
  );
};

export default CertificationsCard;
