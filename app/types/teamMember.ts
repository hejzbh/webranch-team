import { SocialMediaLink } from "./socialMedia";

export interface TeamMemberType {
  name: string;
  role: string;
  profilePhotoSRC: string;
  socialMediaLinks: SocialMediaLink[];
}
