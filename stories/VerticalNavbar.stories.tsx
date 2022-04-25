import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VerticalNavbar } from "./VerticalNavbar";
export default {
  title: "Example/VerticalNavbar",
  component: VerticalNavbar,
} as ComponentMeta<typeof VerticalNavbar>;

const Template: ComponentStory<typeof VerticalNavbar> = (args) => (
  <VerticalNavbar {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   text: "Action",
// };
