import React from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme, props) => ({
  sectionTitle: {
    "& h3, h4": {
      color: theme.palette.common.black,
      fontWeight: "900",
      textAlign: (props) => props.align,
      letterSpacing: "1px",
    },
  },
}));

function SectionTitle(props) {
  const { title, type } = props;
  const classes = useStyles(props);
  return (
    <Box className={classes.sectionTitle}>
      <Typography variant={type}>{title}</Typography>
    </Box>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default SectionTitle;
