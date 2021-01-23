import React from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imageBg: {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: (props) => props.height,
    backgroundImage: (props) => `url("${props.src}")`,
    [theme.breakpoints.up(`sm`)]: {
      height: (props) => props.breakpointSmHeight,
    },
    [theme.breakpoints.up(`md`)]: {
      height: (props) => props.breakpointMdHeight,
    },
  },
}));

function ImageBg(props) {
  const classes = useStyles(props);
  return <Box className={classes.imageBg} />;
}

ImageBg.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  breakpointSmHeight: PropTypes.string,
  breakpointMbHeight: PropTypes.string,
};

export default ImageBg;
