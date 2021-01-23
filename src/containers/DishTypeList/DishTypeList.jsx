import React from "react";
import PropTypes from "prop-types";

import DishType from "./DishType/DishType";
/*---------------Import Material UI components---------------*/
import Box from "@material-ui/core/Box";

function DishTypeList({ data }) {
  const dishTypeList =
    data && data.map((item, i) => <DishType key={i} dishType={item} />);
  return <Box component="ul">{dishTypeList}</Box>;
}
DishTypeList.propTypes = {
  data: PropTypes.array,
};

export default DishTypeList;
