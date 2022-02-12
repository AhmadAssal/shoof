import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GenreButton } from "./GenreButton";

export default {
  title: "Example/GenreButton",
  component: GenreButton,
} as ComponentMeta<typeof GenreButton>;

const Template: ComponentStory<typeof GenreButton> = (args) => (
  <GenreButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Action",
};
