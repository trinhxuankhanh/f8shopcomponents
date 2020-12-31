import React from "react";

import { Cart } from "./Cart";

export default {
  title: "Header/Cart",
  component: Cart,
};

const Carts = (args) => <Cart {...args} />;

export const CartNomal = Carts.bind({});
CartNomal.args = {
  src: "https://www.flaticon.com/svg/static/icons/svg/833/833314.svg",
  alt: "icon",
  number: 3,
  isShow: false,
  products: [],
};

export const CartPro = Carts.bind({});
CartPro.args = {
  src: "https://www.flaticon.com/svg/static/icons/svg/833/833314.svg",
  alt: "icon",
  number: 3,
  isShow: true,
  products: [
    {
      src: "https://cf.shopee.vn/file/2b121c9d88fef74a181a99c778ce3503",
      alt: "img",
      title: "Áo Khoác Nữ Cardigan STRAND",
      price: "69.000đ",
      size: "x",
      quantity: "1",
      type: "Phân loại: Áo Khoác",
    },
    {
      src: "https://cf.shopee.vn/file/2b121c9d88fef74a181a99c778ce3503",
      alt: "img",
      title: "Áo Khoác Nữ Cardigan STRAND",
      price: "69.000đ",
      size: "x",
      quantity: "1",
      type: "Phân loại: Áo Khoác",
    },
    {
      src: "https://cf.shopee.vn/file/2b121c9d88fef74a181a99c778ce3503",
      alt: "img",
      title: "Áo Khoác Nữ Cardigan STRAND",
      price: "69.000đ",
      size: "x",
      quantity: "1",
      type: "Phân loại: Áo Khoác",
    },
  ],
};
