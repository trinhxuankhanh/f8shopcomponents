import React from "react";
import { Button } from "./Button";

export default {
  title: "Main/Button",
  component: Button,
};

const Buttons = (args) => <Button {...args} />;
export const ButtonFilter = Buttons.bind({});
ButtonFilter.args = {
  primary: false,
  title: "Mới nhất",
};

export const ButtonPrimary = Buttons.bind({});
ButtonPrimary.args = {
  primary: true,
  title: "Phổ biến",
};
