import ContactMeCard from "@/components/cards/ContactMe";
import Heading from "@/components/heading/Heading";
import Card from "@/components/ui/Card";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMeSection = () => {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title1="Contact" title2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col gap-8">
            <ContactMeCard
              text="(+963) 959-435-099"
              btnText="Call Me"
              title="Call me directly at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
            />
            <ContactMeCard
              text="zasad2587@gmail.com"
              btnText="Email Me"
              title="Chat with me directly at"
              icon={<MdEmail className="fill-[#333] text-lg" />}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactMeSection;
