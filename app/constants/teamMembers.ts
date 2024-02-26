import { TeamMemberType } from "../types/teamMember";
import { socialMediaLinks } from "./socialMediaLinks";

export const teamMembersList: TeamMemberType[] = [
  {
    name: "Hazim Tulumovic",
    role: "Frontend Developer",
    socialMediaLinks: socialMediaLinks.filter((link) =>
      link.name.startsWith("Hazim")
    ),
    profilePhotoSRC: "/images/team/hazim.webp",
  },
  {
    name: "Amel Islamovic",
    role: "Full Stack Developer",
    socialMediaLinks: socialMediaLinks.filter((link) =>
      link.name.startsWith("Amel")
    ),
    profilePhotoSRC: "/images/team/amel.webp",
  },
];
