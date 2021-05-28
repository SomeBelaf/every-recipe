import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "10em",
    background: "transparent",
    border: `3px solid ${theme.palette.common.black}`,
    color: theme.palette.common.black,
    "&:hover": {
      borderColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      background: theme.palette.secondary.main,
    },
  },
}));

const stylesLoading = makeStyles(
  (theme) => ({
    colorPrimary: {
      color: theme.palette.secondary.main,
    },
  }),
  { name: "MuiCircularProgress" }
);

function RoundedButton({ children, ...props }) {
  const classes = useStyles();
  return (
    <Button className={classes.button} {...props}>
      {children}
    </Button>
  );
}

function Loading({ ...props }) {
  stylesLoading();
  return <CircularProgress {...props} />;
}

RoundedButton.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { RoundedButton, Loading };
