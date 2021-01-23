import React from "react";
/*---------------Import image---------------*/
import gluten_free from "../../images/gluten_free.png";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: 4,
    marginLeft: 4,
  },
  GlutenFreeImage: {
    width: 30,
    height: 30,
  },
}));

function GlutenFreeIcon(props) {
  const classes = useStyles();
  return (
    <Grid item className={classes.container}>
      <Tooltip title="Gluten free" placement="top">
        <img
          src={gluten_free}
          alt="Gluten free"
          className={classes.GlutenFreeImage}
        ></img>
      </Tooltip>
    </Grid>
  );
}

export default GlutenFreeIcon;
