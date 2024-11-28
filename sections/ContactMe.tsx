import ContactMeCard from "@/components/cards/ContactMe";
import Heading from "@/components/heading/Heading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import SelectInput from "@/components/ui/SelectInput";
import TextArea from "@/components/ui/TextArea";
import { useState } from "react";
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

const ContactMeSection = () => {
  const [services, setServices] = useState<string[]>([]);

  const servicesOptions = [
    { id: "Web Design", text: "Web Design" },
    { id: "Web Development", text: "Web Development" },
    { id: "Full Website", text: "Full Website" },
  ];

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
          <div className="lg:col-span-2 bg-secondary-background border shadow-md border-border space-y-6 relative overflow-hidden px-[25px] py-5">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input placeholder="Full Name" type="text" icon={<FaUser />} />
              <Input
                placeholder="Email Address"
                type="email"
                icon={<MdEmail />}
              />
            </div>
            <div className="flex items-center justify-between mb-4 gap-8">
              <Input placeholder="Subject" type="text" icon={<MdSubject />} />
            </div>
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">
                  What services are you in need for ?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {servicesOptions.map((ser) => (
                    <SelectInput
                      key={ser.id}
                      type="checkbox"
                      id={ser.id}
                      text={ser.text}
                      selectedOption={services}
                      setSelectedOption={setServices}
                      allowMultiple
                    />
                  ))}
                </div>
              </div>
            </div>
            <TextArea
              placeholder="Tell Me What You want From Me"
              icon={<FaProjectDiagram />}
            />
            <div className="w-full flex justify-end">
              <Button classNames="!w-44 !py-3 !text-xl">
                Send <SiMinutemailer />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactMeSection;
