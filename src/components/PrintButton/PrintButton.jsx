import React from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Button from "@material-ui/core/Button";
import PrintRoundedIcon from "@material-ui/icons/PrintRounded";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  outlinedSizeLarge: {
    fontSize: "1.2rem",
  },
})(Button);

function PrintButton(props) {
  const { onClick, children } = props;
  return (
    <StyledButton
      variant="outlined"
      size="large"
      startIcon={<PrintRoundedIcon />}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

PrintButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PrintButton;
