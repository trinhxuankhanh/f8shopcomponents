import React from "react";

import { Card } from "./Card";

export default {
  title: "Main/Card",
  component: Card,
};

const Cards = (args) => <Card {...args} />;
export const CardNoLable = Cards.bind({});
CardNoLable.args = {
  title: "Sữa rửa mặt inisfree green tea, sữa rửa mặt sạch bụi 150ml mã MP50",
  src:
    "https://sanhangchinhhang.com/img/sua-rua-mat-innisfree-tra-xanh-lam-sach-sau-ngan-ngua-mun-3.jpg",
  price: "175.000đ",
  discount: "87.500đ",
  saled: "88 đã bán",
  branch: "Whoo",
  from: "Nhật Bản",
  numberDisCount: 24,
};
