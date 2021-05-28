import React from "react";
/*---------------Import Animation--------------*/
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
/*---------------Import components---------------*/
import Logo from "./Logo/Logo";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
  logoWrapper: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(10),
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      className={classes.header}
    >
      <ScrollAnimation
        offset={10}
        animateIn="animate__fadeInDown"
        duration={2}
        animatePreScroll
        animateOnce
      >
        <Grid item xs="auto" className={classes.logoWrapper}>
          <Logo />
        </Grid>
      </ScrollAnimation>
    </Grid>
  );
}

export default Header;
