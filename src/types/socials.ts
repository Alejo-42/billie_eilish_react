import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface SocialMediaLink {
  id: number;
  link: string;
  user_name: string;
  icon_class: string;
  name: string
}

export interface SocialLinkItemProps {
  link: string;
  name: string;
  icon: IconDefinition;
  branchColor: string;
}

export interface SocialListProps {
  data: SocialMediaLink[];
  loading: boolean;
}