import React from "react";

import { SubTitle } from "./SubTitle";

export default {
  title: "Main/SubTitle",
  component: SubTitle,
};

const SubTitles = (args) => <SubTitle {...args} />;
export const SubTitleDefault = SubTitles.bind({});
SubTitleDefault.args = {
  sub: "Chăm sóc khách hàng",
};
