import React from "react";

import { Search } from "./Search";

export default {
  title: "Header/Search",
  component: Search,
};

const Searchs = (args) => <Search {...args} />;

export const SearchPrimary = Searchs.bind({});
SearchPrimary.args = {
  histories: ["Kem dưỡng da", "Kem trị mụn", "Mỹ phẩm Ohui"],
  selects: ["Trong Shop", "Ngoài Shop"],
};
