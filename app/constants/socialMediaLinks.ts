// TS
import { SocialMediaLink } from "../types/socialMedia";
// Icons
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: `Hazim's LinkedIn`,
    href: "https://www.linkedin.com/in/hazim-tulumovi%C4%87-02a28623b/",
    Icon: FaLinkedin,
  },
  {
    name: `Amel's LinkedIn`,
    href: "https://www.linkedin.com/in/amel-islamovic-a2593b267/",
    Icon: FaLinkedin,
  },
  { name: `Hazim's GitHub`, href: "https://github.com/hejzbh", Icon: FaGithub },
  { name: `Amel's GitHub`, href: "https://github.com/sk0le", Icon: FaGithub },
  {
    name: `Amel's (Our) Upwork Profile`,
    href: "https://www.upwork.com/freelancers/~01894bc6d89d081535",
    Icon: SiUpwork,
  },
];
