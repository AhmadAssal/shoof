import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HorizontalNavbar } from "./HorizontalNavbar";
export default {
  title: "Example/HorizontalNavbar",
  component: HorizontalNavbar,
} as ComponentMeta<typeof HorizontalNavbar>;

const Template: ComponentStory<typeof HorizontalNavbar> = (args) => (
  <HorizontalNavbar />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: "Action",
};
