import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ListModal } from "./ListModal";

export default {
  title: "Example/ListModal",
  component: ListModal,
} as ComponentMeta<typeof ListModal>;

const Template: ComponentStory<typeof ListModal> = (args) => (
  <ListModal {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  onCloseButton: () => {},
  open: true,
  onCloseModal: () => {},
  watchlists: [
    {
      name: "Action",
      id: 23,
    },
    {
      name: "Comedy",
      id: 43,
    },
    {
      name: "Romance",
      id: 53,
    },
    {
      name: "Sci-Fi",
      id: 63,
    },
  ],
  onAdd: () => {},
  isInWatchlist: () => {
    return true;
  },
};
