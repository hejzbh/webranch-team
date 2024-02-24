// Icons
import { CgPerformance } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { SiGooglemarketingplatform } from "react-icons/si";

export const lighthouseList: {
  Icon: any;
  name: string;
  description: string;
  colorClass?: string;
}[] = [
  {
    Icon: CgPerformance,
    name: "Performance",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Similique veniam veritatis id, necessitatibus eos ipsum
obcaecati omnis placeat ratione atque.`,
    colorClass: "text-performance",
  },
  {
    Icon: IoSettingsOutline,
    name: "Accessbility",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Similique veniam veritatis id, necessitatibus eos ipsum
obcaecati omnis placeat ratione atque.`,
    colorClass: "text-best",
  },
  {
    Icon: SiGooglemarketingplatform,
    name: "SEO",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Similique veniam veritatis id, necessitatibus eos ipsum
obcaecati omnis placeat ratione atque.`,
    colorClass: "text-seo",
  },
];
