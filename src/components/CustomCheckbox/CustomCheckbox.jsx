import React from "react";
/*---------------Import Material UI components---------------*/
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import { withStyles } from "@material-ui/core/styles";

const StyledCheckbox = withStyles({
  colorPrimary: {
    "&:hover": {
      backgroundColor: "rgb(111 150 44 / 0.1)",
    },
  },
  checked: {
    color: "#6f962ccc !important",
    "&:hover": {
      backgroundColor: "rgb(111 150 44 / 0.1)",
    },
  },
})(Checkbox);

function CustomCheckbox(props) {
  return (
    <StyledCheckbox
      color="primary"
      icon={<RadioButtonUncheckedIcon fontSize="small" />}
      checkedIcon={<CheckRoundedIcon fontSize="small" />}
    />
  );
}

export default CustomCheckbox;
