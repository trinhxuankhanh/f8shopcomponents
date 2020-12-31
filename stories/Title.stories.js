import React from "react";
import { Title } from "./Title";

export default {
  title: "Main/Title",
  component: Title,
};

const Titles = (args) => <Title {...args} />;
export const TitleDefault = Titles.bind({});
TitleDefault.args = {
  title: "Chăm sóc khách hàng",
};

export const TitleDefaultPreview = Titles.bind({});
TitleDefaultPreview.args = {
  title: "Giới thiệu",
};

export const TitleDefaultCate = Titles.bind({});
TitleDefaultCate.args = {
  title: "DANH MỤC",
};

export const TitleDefaultUs = Titles.bind({});
TitleDefaultUs.args = {
  title: "THEO DÕI CHÚNG TÔI",
};
