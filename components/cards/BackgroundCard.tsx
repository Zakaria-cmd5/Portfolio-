import Card from "../ui/Card";

const BackgroundCard = () => {
  return (
    <Card classNames="md:h-full" title="My Background">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
          Originating from a humble beginning in a &nbsp;
          <span className="text-white underline">remote from Syria aleppo</span>
          , my early years were marked by enduring harch living conditions.
          However, fortune smilled upon me when, I enterd computer scince my
          fation start, opening doors to new opportunities. <br />
          <br />
          <span className="text-white underline">
            It was amidst this transition
          </span>
          &nbsp; that my profound fasination with &nbsp;
          <span className="text-white underline">technology</span>&nbsp; first
          took root. From those formative years, I found myself deeply immersed
          in &nbsp;
          <span className="text-white underline">the world of gaming</span>
          &nbsp; , where my passion for
          <span className="text-white underline">
            &nbsp;coding and technology&nbsp;
          </span>
          began to flourish.
          <br />
          As I delved into realem of technology, I ventured into diverse fields,
          ranging from
          <span className="text-white">&nbsp;React</span>
          to <span className="text-white">&nbsp;Next.Js</span>
          to become{" "}
          <span className="text-white">&nbsp;Full Stack developer</span>,
          mastering the art of crafting immersive online experience
        </p>
      </div>
    </Card>
  );
};

export default BackgroundCard;
