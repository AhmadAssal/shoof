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
  primary: true,
  title: "The Dark Knight Rises",
};
