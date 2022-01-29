import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MediaCard } from "./MediaCard";

export default {
  title: "Example/MediaCard",
  component: MediaCard,
} as ComponentMeta<typeof MediaCard>;

const Template: ComponentStory<typeof MediaCard> = (args) => (
  <MediaCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "The Dark Knight Rises",
  imageUrl:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  imdbRating: 9.0,
  trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  genres: ["action", "thriller"],
};
