import React from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  errorWrapper: {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    margin: (props) => props.margin,
    height: (props) => props.height,
  },
  errorText: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    letterSpacing: "1px",
  },
}));

function ErrorMessage(props) {
  const { hasError, errorInfo, variant } = props;
  const classes = useStyles(props);
  let isError = (
    <Box component="article" className={classes.errorWrapper}>
      <Typography className={classes.errorText} variant={variant}>
        {errorInfo}
      </Typography>
    </Box>
  );
  return hasError ? isError : props.children;
}

ErrorMessage.propTypes = {
  hasError: PropTypes.bool.isRequired,
  errorInfo: PropTypes.string,
  variant: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default ErrorMessage;
