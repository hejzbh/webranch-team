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
    description: `We optimize for speed and efficiency, ensuring smooth experiences across all platforms.`,
    colorClass: "text-performance",
  },
  {
    Icon: IoSettingsOutline,
    name: "Accessbility",
    description: `We prioritize inclusivity, making our projects usable for all users.`,
    colorClass: "text-best",
  },
  {
    Icon: SiGooglemarketingplatform,
    name: "SEO",
    description: `We lay the groundwork for strong SEO, ensuring your online presence gets noticed.`,
    colorClass: "text-seo",
  },
];
