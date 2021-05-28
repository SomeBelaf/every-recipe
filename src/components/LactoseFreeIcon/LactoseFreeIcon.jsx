import React from "react";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
/*---------------Import image---------------*/
import lactoseFree from "../../images/lactose_free.png";

const useStyles = makeStyles(() => ({
  container: {
    marginRight: 4,
    marginLeft: 4,
  },
  LactoseFreeImage: {
    width: "auto",
    height: 30,
  },
}));

function LactoseFreeIcon() {
  const classes = useStyles();
  return (
    <Grid item className={classes.container}>
      <Tooltip title="Lactose free" placement="top">
        <img
          src={lactoseFree}
          alt="Lactose free"
          className={classes.LactoseFreeImage}
        />
      </Tooltip>
    </Grid>
  );
}

export default LactoseFreeIcon;
