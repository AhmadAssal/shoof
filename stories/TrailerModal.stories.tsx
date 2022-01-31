import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TrailerModal } from "./TrailerModal";

export default {
  title: "Example/TrailerModal",
  component: TrailerModal,
} as ComponentMeta<typeof TrailerModal>;

const Template: ComponentStory<typeof TrailerModal> = (args) => (
  <TrailerModal {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: "why u do dis",
  open: true,
  onClick: () => {},
  onCloseModal: () => {},
};
