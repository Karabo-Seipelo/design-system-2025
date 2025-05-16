export type Team = {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
};

export type TeamSectionProps = {
  title: string;
  subTitle: string;
  description: string;
  team: Team[];
};

export interface TeamHeaderProps {
  title: string;
  subTitle: string;
  description: string;
}

export interface TeamListProps {
  team: Team[];
}
