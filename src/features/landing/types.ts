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

export type HighlightDetails = {
  name: string;
  description: string;
  image: string;
  activities: {
    name: string;
  }[];
};

export enum HighlightsType {
  Surfing = "Surfing",
  TraditionalFestivals = "Traditional Festivals",
  Volcanoes = "Volcanoes",
}
