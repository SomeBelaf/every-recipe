import React from "react";
/*---------------Import image---------------*/
import vegetarian from "../../images/vegetarian.png";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: 4,
    marginLeft: 4,
  },
  VegetarianImage: {
    width: 30,
    height: 30,
  },
}));

function VegetarianIcon(props) {
  const classes = useStyles();
  return (
    <Grid item className={classes.container}>
      <Tooltip title="Vegetarian" placement="top">
        <img
          src={vegetarian}
          alt="Vegetarian"
          className={classes.VegetarianImage}
        ></img>
      </Tooltip>
    </Grid>
  );
}

export default VegetarianIcon;
