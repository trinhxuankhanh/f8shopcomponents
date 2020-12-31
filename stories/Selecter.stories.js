import React from "react";

import { Selecter } from "./Selecter";

export default {
  title: "Header/Selecter",
  component: Selecter,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Selecters = (args) => <Selecter {...args} />;

export const Notification = Selecters.bind({});
Notification.args = {
  content: "Thông báo",
  src: "https://www.flaticon.com/svg/static/icons/svg/633/633584.svg",
  alt: "icon",
};

export const Help = Selecters.bind({});
Help.args = {
  content: "Help",
  src: "https://www.flaticon.com/svg/static/icons/svg/1436/1436708.svg",
  alt: "icon",
};

export const User = Selecters.bind({});
User.args = {
  content: "Dac Chi",
  src: "https://www.flaticon.com/svg/static/icons/svg/747/747376.svg",
  alt: "icon",
};
