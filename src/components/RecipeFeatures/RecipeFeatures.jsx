import React from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";
import RoomServiceOutlinedIcon from "@material-ui/icons/RoomServiceOutlined";
import { makeStyles } from "@material-ui/core/styles";
/*---------------Import components---------------*/
import GlutenFreeIcon from "../GlutenFreeIcon/GlutenFreeIcon";
import LactoseFreeIcon from "../LactoseFreeIcon/LactoseFreeIcon";
import VeganIcon from "../VeganIcon/VeganIcon";
import VegetarianIcon from "../VegetarianIcon/VegetarianIcon";

const useStyles = makeStyles((theme) => ({
  recipeIntro: {
    marginBottom: theme.spacing(3),
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
    backgroundColor: theme.palette.bgColor,
    borderRadius: 6,
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  recipeFeaturesIcon: {
    fill: theme.palette.primary.lighter,
    marginRight: 4,
    fontSize: "2rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.3rem",
    },
  },
  recipeFeaturesText: {
    "& h6": {
      fontWeight: 500,
      lineHeight: "1.15",
      "&:last-child": {
        color: theme.palette.primary.lighter,
      },
    },
  },
}));

function RecipeFeatures(props) {
  const {
    isVegan,
    isVegetarian,
    isLactoseFree,
    isGlutenFree,
    servings,
    readyInMinutes,
  } = props;
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={12}
      alignItems="center"
      justify="space-between"
      className={classes.recipeIntro}
    >
      <Grid container item xs="auto" alignItems="center">
        {isVegan && <VeganIcon />}
        {isGlutenFree && <GlutenFreeIcon />}
        {isVegetarian && <VegetarianIcon />}
        {isLactoseFree && <LactoseFreeIcon />}
      </Grid>
      <Grid container item xs={12} sm={6} lg={5} xl={4}>
        <Grid container item xs={6} alignItems="center">
          <AccessTimeRoundedIcon className={classes.recipeFeaturesIcon} />
          <Grid
            item
            container
            xs="auto"
            direction="column"
            className={classes.recipeFeaturesText}
          >
            <Typography variant="subtitle1">Cook time</Typography>
            <Typography variant="subtitle1">{readyInMinutes} mins</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={6} alignItems="center">
          <RoomServiceOutlinedIcon className={classes.recipeFeaturesIcon} />
          <Grid
            item
            container
            xs="auto"
            direction="column"
            className={classes.recipeFeaturesText}
          >
            <Typography variant="subtitle1">Servings</Typography>
            <Typography variant="subtitle1">{servings}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

RecipeFeatures.propTypes = {
  isVegan: PropTypes.bool.isRequired,
  isVegetarian: PropTypes.bool.isRequired,
  isLactoseFree: PropTypes.bool.isRequired,
  isGlutenFree: PropTypes.bool.isRequired,
  servings: PropTypes.number.isRequired,
  readyInMinutes: PropTypes.number.isRequired,
};

export default RecipeFeatures;
