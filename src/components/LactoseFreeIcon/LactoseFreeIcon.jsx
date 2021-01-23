import React from "react";
/*---------------Import image---------------*/
import lactose_free from "../../images/lactose_free.png";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: 4,
    marginLeft: 4,
  },
  LactoseFreeImage: {
    width: "auto",
    height: 30,
  },
}));

function LactoseFreeIcon(props) {
  const classes = useStyles();
  return (
    <Grid item className={classes.container}>
      <Tooltip title="Lactose free" placement="top">
        <img
          src={lactose_free}
          alt="Lactose free"
          className={classes.LactoseFreeImage}
        ></img>
      </Tooltip>
    </Grid>
  );
}

export default LactoseFreeIcon;
