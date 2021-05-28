import React from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
/*---------------Import react-router-dom--------------*/
import { Link } from "react-router-dom";
/*---------------Import components---------------*/
import RoundedLink from "../../../components/RoundedLink/RoundedLink";
import DishTypeList from "../../DishTypeList/DishTypeList";
import GlutenFreeIcon from "../../../components/GlutenFreeIcon/GlutenFreeIcon";
import LactoseFreeIcon from "../../../components/LactoseFreeIcon/LactoseFreeIcon";
import VeganIcon from "../../../components/VeganIcon/VeganIcon";
import VegetarianIcon from "../../../components/VegetarianIcon/VegetarianIcon";
/*---------------Import images---------------*/
import imageErr from "../../../images/image_err.jpg";
import eye from "../../../images/svg/eye.svg";

const useStyles = makeStyles((theme) => ({
  card: {
    transition: `${theme.transitions.create(["all"], {
      duration: theme.transitions.duration.standard,
    })}`,
    "&:hover": {
      transform: "translateY(-10px) ",
    },
  },
  recipeTitle: {
    letterSpacing: "1px",
    fontWeight: 400,
  },
  cardImageLink: {
    outline: "none",
    "&:hover, &:focus": {
      "& div": {
        transform: "scale(0.99)",
        "&:after": {
          opacity: 1,
        },
      },
    },
  },
  cardImage: {
    position: "relative",
    height: 250,
    transition: `${theme.transitions.create(["all"], {
      duration: theme.transitions.duration.standard,
    })}`,
    "&:after": {
      content: '""',
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0, 0.3)",
      backgroundImage: `url(${eye})`,
      backgroundSize: "auto",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      transition: "inherit",
    },
  },
  recipeDesc: {
    borderBottom: "1px dashed rgba(0,0,0,0.2)",
    paddingBottom: theme.spacing(1),
  },
  dishTypeListWrapper: {
    marginBottom: theme.spacing(1),
  },
  dishIconWrapper: {
    width: "fit-content",
    alignSelf: "flex-end",
  },
  cardButtonWrapper: {
    justifyContent: "center",
  },
  likeIcon: {
    marginRight: theme.spacing(1),
    fill: theme.palette.like,
  },
  likeText: {
    color: theme.palette.primary.lighter,
  },
}));

function RecipeCard(props) {
  const {
    id,
    name,
    isVegan,
    isVegetarian,
    isLactoseFree,
    isGlutenFree,
    cardImage,
    dishTypes,
    likes,
  } = props;
  const classes = useStyles();
  const link = `/recipe/${id}`;
  return (
    <Card component="section" className={classes.card}>
      <Link to={link} className={classes.cardImageLink}>
        <CardMedia
          image={cardImage || imageErr}
          className={classes.cardImage}
        />
      </Link>
      <CardContent>
        <Box mb={1}>
          <Typography variant="h5" className={classes.recipeTitle}>
            {name}
          </Typography>
        </Box>
        <Grid
          container
          item
          xs={12}
          direction="column"
          className={classes.recipeDesc}
        >
          <Grid item xs={12} className={classes.dishTypeListWrapper}>
            <DishTypeList data={dishTypes} />
          </Grid>
          <Grid item container alignItems="center" justify="space-between">
            <Grid container item xs={3} alignItems="center">
              <FavoriteIcon className={classes.likeIcon} />
              <Typography variant="subtitle2" className={classes.likeText}>
                {likes}
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs="auto"
              alignItems="center"
              className={classes.dishIconWrapper}
            >
              {isVegan && <VeganIcon />}
              {isGlutenFree && <GlutenFreeIcon />}
              {isVegetarian && <VegetarianIcon />}
              {isLactoseFree && <LactoseFreeIcon />}
            </Grid>
          </Grid>
        </Grid>
        <CardActions className={classes.cardButtonWrapper}>
          <RoundedLink to={link}>Read more</RoundedLink>
        </CardActions>
      </CardContent>
    </Card>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isVegan: PropTypes.bool.isRequired,
  isVegetarian: PropTypes.bool.isRequired,
  isLactoseFree: PropTypes.bool.isRequired,
  isGlutenFree: PropTypes.bool.isRequired,
  cardImage: PropTypes.string.isRequired,
  dishTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  likes: PropTypes.number.isRequired,
};
export default RecipeCard;
