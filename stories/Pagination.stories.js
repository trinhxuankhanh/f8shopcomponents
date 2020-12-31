import React from "react";
import { Panigation } from "./Pagination";

export default {
  title: "Main/Pagination",
  component: Panigation,
};

const Panigations = (args) => <Panigation {...args} />;
export const PanigationDefault = Panigation.bind({});
PanigationDefault.args = {
  panies: [1, 2, 3, 4, 5],
};
