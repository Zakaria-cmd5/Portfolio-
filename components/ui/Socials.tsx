import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "./Button";

const Socials = () => {
  const socials = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/zakaria-asad-004395318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      userName: "Zakaria Asad",
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      link: "https://www.facebook.com/share/1MznYfz31x/?mibextid=qi2Omg",
      userName: "Zakaria Asad",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      link: "https://github.com/Zakaria-cmd5",
      userName: "Zakaria-cmd5",
    },
  ];

  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
