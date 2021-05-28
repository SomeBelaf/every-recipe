import React from "react";
/*---------------Import react-router-dom--------------*/
import { Link } from "react-router-dom";
/*---------------Import Material UI components---------------*/
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    "& a": {
      textDecoration: "none",
    },
    "& h4": {
      color: theme.palette.common.black,
      textShadow: `1px 1px ${theme.palette.common.white}`,
      fontWeight: "bold",
      letterSpacing: "1px",
      whiteSpace: "nowrap",
    },
  },
}));

function Logo() {
  const classes = useStyles();
  return (
    <Box component="article" className={classes.logo}>
      <Link to="/">
        <Typography variant="h4">Recipe</Typography>
      </Link>
    </Box>
  );
}

export default Logo;
