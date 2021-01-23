import React from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Box from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  recipeImage: {
    width: "100%",
    marginBottom: theme.spacing(3),
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0px 0px 25px 2px rgba(0,0,0,0.1)",
    "& img": {
      width: "100%",
      display: "block",
    },
  },
}));

function RecipeImage({ image }) {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.recipeImage}>
      <img src={image} alt="" />
    </Box>
  );
}

RecipeImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default RecipeImage;
