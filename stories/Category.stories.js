import React from "react";

import { Category } from "./Category";

export default {
  title: "Main/Category",
  component: Category,
};

const Categorys = (args) => <Category {...args} />;

export const CategoryNomal = Categorys.bind({});
CategoryNomal.args = {
  selects: ["Trang điểm mặt", "Trang điểm mặt", "Trang điểm mặt"],
};
