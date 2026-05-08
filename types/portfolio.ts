export type SocialIconName = "linkedin" | "instagram" | "youtube" | "x";

export type SocialLink = {
  label: string;
  platform: string;
  href: string;
  icon: SocialIconName;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
};

export type ProjectCategory = "JOGOS PUBLICADOS" | "VFX" | "PROJETOS PESSOAIS";

export type ProjectMedia = {
  id: string;
  label: string;
  src?: string;
  alt?: string;
};

export type ProjectCardImage = {
  src: string;
  alt: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  platform: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  description: string;
  externalLink: ProjectLink;
  tools: string[];
  palette: [string, string];
  cardImage?: ProjectCardImage;
  media: ProjectMedia[];
  features: string[];
  responsibilities: string[];
};

export type FocusArea = {
  title: string;
  description: string;
};
