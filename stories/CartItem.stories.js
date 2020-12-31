import React from "react";

import { CartItem } from "./CartItem";

export default {
  title: "Header/CartItem",
  component: CartItem,
};

const CartItems = (args) => <CartItem {...args} />;

export const CartItemPrimary = CartItems.bind({});
CartItemPrimary.args = {
  src: "https://cf.shopee.vn/file/2b121c9d88fef74a181a99c778ce3503",
  alt: "img",
  title: "Áo Khoác Nữ Cardigan STRAND",
  price: "69.000đ",
  size: "x",
  quantity: "1",
  type: "Phân loại: Áo Khoác",
};
