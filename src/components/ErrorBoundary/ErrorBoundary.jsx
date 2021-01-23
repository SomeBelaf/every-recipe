import React from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  errorWrapper: {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    margin: `${theme.spacing(7)}px auto`,
    height: "fit-content",
  },
  errorText: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    letterSpacing: "1px",
  },
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null, hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.table("error", error.message);
    console.table("errorInfo", errorInfo);
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    const { classes, variant } = this.props;
    if (this.state.hasError) {
      // Error path
      return (
        <Box component="article" className={classes.errorWrapper}>
          <Typography className={classes.errorText} variant={variant}>
            {this.state.error.message}
          </Typography>
        </Box>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ErrorBoundary);
