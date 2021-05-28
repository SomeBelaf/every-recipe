import React from "react";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
/*---------------Import Animation--------------*/
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
/*---------------Import components---------------*/
import ImageBg from "../../components/ImageBg/ImageBg";
import HomeForm from "../HomeForm/HomeForm";
/*---------------Import image---------------*/
import homeBg from "../../images/home_bg.jpeg";

const useStyles = makeStyles((theme) => ({
  hero: {
    flexDirection: "column",
    backgroundColor: theme.palette.bgColor,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  heroLeft: {
    width: "100%",
  },
  heroRight: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
      marginBottom: 0,
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
  },
  homeIntroContent: {
    paddingBottom: theme.spacing(5),
  },
  heroTitle: {
    fontWeight: 300,
  },
  heroSubTitle: {
    color: theme.palette.primary.lighter,
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: theme.spacing(3),
  },
}));

function HomeIntro() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.hero}>
      <Grid item xs={12} md={6} className={classes.heroLeft}>
        <ScrollAnimation
          offset={10}
          animateIn="animate__fadeInLeft"
          duration={2}
          animatePreScroll
          animateOnce
        >
          <ImageBg src={homeBg} height="50vh" breakpointMdHeight="100vh" />
        </ScrollAnimation>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={6}
        direction="column"
        className={classes.heroRight}
      >
        <ScrollAnimation
          offset={10}
          animateIn="animate__fadeInRight"
          duration={2}
          animatePreScroll
          animateOnce
        >
          <Grid item xs={12} lg={10} className={classes.homeIntroContent}>
            <Typography variant="subtitle1" className={classes.heroSubTitle}>
              Welcome to Recipe
            </Typography>
            <Typography variant="h3" className={classes.heroTitle}>
              Search for your favorite recipes
              <Box component="strong"> over 5000 dish</Box>, related recipes,
              cooking tips
            </Typography>
          </Grid>
          <Grid item xs={8} className={classes.form}>
            <HomeForm />
          </Grid>
        </ScrollAnimation>
      </Grid>
    </Grid>
  );
}

export default HomeIntro;
