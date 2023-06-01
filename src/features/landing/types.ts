export type Highlight = {
  title: string;
  description: string;
  image: string;
};

export type Category = {
  name: string;
  activities: {
    title: string;
  }[];
};
