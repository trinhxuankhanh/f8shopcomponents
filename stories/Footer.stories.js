import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Main/Footer",
  component: Footer,
};

const Footeres = (args) => <Footer {...args} />;
export const Foot = Footeres.bind({});
Foot.args = {
  title: "© 2020 Shopee. Tất cả các quyền được bảo lưu",
};
