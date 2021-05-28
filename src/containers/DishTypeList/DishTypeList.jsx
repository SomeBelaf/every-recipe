import React from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Box from "@material-ui/core/Box";
/*---------------Import components---------------*/
import DishType from "./DishType/DishType";

function DishTypeList({ data }) {
  const dishTypeList =
    data && data.map((item, i) => <DishType key={i} dishType={item} />);
  return <Box component="ul">{dishTypeList}</Box>;
}
DishTypeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DishTypeList;
