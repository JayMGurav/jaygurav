import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Jay Gurav",
  DESCRIPTION: "Jay Gurav personal articles",
  EMAIL: "jaymgurav@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const ARTICLES: Metadata = {
  TITLE: "Articles",
  DESCRIPTION: "Quater mile into my learnings and experiences.",
};

export const BOOKS: Metadata = {
  TITLE: "Bookshelf",
  DESCRIPTION: "A collection of books I have read or plan to read.",
};

export const PAPERS: Metadata = {
  TITLE: "Paperself",
  DESCRIPTION: "I read a few papers every now and then, around various topics that interests me and here are some of them.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/jaymgurav",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/jaymgurav",
  },
  {
    NAME: "Website",
    HREF: "https://jaygurav.com",
  },
];
