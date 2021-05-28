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
    this.state = { error: null, hasError: false };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      error,
    });
  }

  render() {
    const { classes, variant, children } = this.props;
    const { hasError, error } = this.state;
    if (hasError) {
      // Error path
      return (
        <Box component="article" className={classes.errorWrapper}>
          <Typography className={classes.errorText} variant={variant}>
            {error.message}
          </Typography>
        </Box>
      );
    }
    // Normally, just render children
    return children;
  }
}

ErrorBoundary.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
ErrorBoundary.defaultProps = {
  variant: "h3",
};

export default withStyles(styles)(ErrorBoundary);
