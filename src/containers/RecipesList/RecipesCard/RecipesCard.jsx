import React from "react";
import PropTypes from "prop-types";
import eye from "../../../images/svg/eye.svg";
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
import image_err from "../../../images/image_err.jpg";
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
    image,
    dishTypes,
    likes,
  } = props;
  const classes = useStyles();
  const link = `/recipe/${id}`;
  return (
    <Card component="section" className={classes.card}>
      <Link to={link} className={classes.cardImageLink}>
        <CardMedia
          image={image ? image : image_err}
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
  id: PropTypes.number,
  name: PropTypes.string,
  isVegan: PropTypes.bool,
  isVegetarian: PropTypes.bool,
  isLactoseFree: PropTypes.bool,
  isGlutenFree: PropTypes.bool,
  image: PropTypes.string,
  dishTypes: PropTypes.array,
  likes: PropTypes.number,
  handleSelectedCard: PropTypes.func,
};
export default RecipeCard;
