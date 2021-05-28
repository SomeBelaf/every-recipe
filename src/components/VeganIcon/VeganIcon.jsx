import React from "react";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
/*---------------Import image---------------*/
import vegan from "../../images/vegan.png";

const useStyles = makeStyles(() => ({
  container: {
    marginRight: 4,
    marginLeft: 4,
  },
  VeganImage: {
    width: 30,
    height: 30,
  },
}));

function VeganIcon() {
  const classes = useStyles();
  return (
    <Grid item className={classes.container}>
      <Tooltip title="Vegan" placement="top">
        <img src={vegan} alt="Vegan" className={classes.VeganImage} />
      </Tooltip>
    </Grid>
  );
}

export default VeganIcon;
