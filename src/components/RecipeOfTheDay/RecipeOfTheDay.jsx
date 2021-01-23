import React, { useEffect } from "react";
import PropTypes from "prop-types";
/*---------------Import hooks---------------*/
import { useMakeRequest } from "../../hooks/useMakeRequest";
import { useConvertRecipe } from "../../hooks/useConvertRecipe";
/*---------------Import components---------------*/
import RoundedLink from "../RoundedLink/RoundedLink";
import SectionTitle from "../SectionTitle/SectionTitle";
import DishTypeList from "../../containers/DishTypeList/DishTypeList";
import GlutenFreeIcon from "../GlutenFreeIcon/GlutenFreeIcon";
import LactoseFreeIcon from "../LactoseFreeIcon/LactoseFreeIcon";
import VeganIcon from "../VeganIcon/VeganIcon";
import VegetarianIcon from "../VegetarianIcon/VegetarianIcon";
import { Loading } from "../../customizedComponents";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
/*---------------Import image---------------*/
import parallaxBg from "../../images/parallax_bg.jpg";
/*---------------Import parallax---------------*/
import { Parallax, Background } from "react-parallax";
/*---------------Import Animation--------------*/
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useStyles } from "./RecipeOfTheDay_styles";

// import testData from "../../test-data-one.json";

function RecipeOfTheDay(props) {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [makeRequest, data, hasError, error, isLoading] = useMakeRequest();
  const [convertedData, setData] = useConvertRecipe("normal");

  useEffect(() => {
    makeRequest(
      `https://api.spoonacular.com/recipes/random?apiKey=105c45c3c46749d4a2344c632ce5f2de&number=1`
    );
    console.log(data);
    setData(data);
    console.log(convertedData);
  }, [makeRequest, data, setData, convertedData]);

  const link = convertedData && `/recipe/${convertedData.id}`;
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={6} lg={5} xl={4}>
        {isLoading || convertedData === undefined ? (
          <Box className={classes.loading}>
            <Loading size={60} />
          </Box>
        ) : (
          <ErrorMessage
            hasError={hasError}
            errorInfo={error}
            variant="h4"
            height="100%"
            margin="0 auto"
          >
            {/* Часть с контентом */}
            <Box component="section" className={classes.recipeCard}>
              <ScrollAnimation
                offset={10}
                animateIn="animate__slideInLeft"
                duration={3}
                animatePreScroll
                animateOnce
              >
                <Grid item xs={12} className={classes.sectionTitle}>
                  <SectionTitle
                    title="Recipes of the day"
                    align="left"
                    type="h4"
                  />
                </Grid>
                <Grid container item xs={12} className={classes.recipeInfo}>
                  <Typography variant="h5" className={classes.recipeTitle}>
                    {convertedData.name}
                  </Typography>
                  <Grid
                    container
                    item
                    xs={12}
                    direction="column"
                    className={classes.recipeDesc}
                  >
                    <Grid item xs={12} className={classes.dishTypeListWrapper}>
                      <DishTypeList data={convertedData.dishTypes} />
                    </Grid>
                    <Grid
                      item
                      container
                      alignItems="center"
                      justify="space-between"
                    >
                      <Grid container item xs={3} alignItems="center">
                        <FavoriteIcon className={classes.likeIcon} />
                        <Typography
                          variant="subtitle2"
                          className={classes.likeText}
                        >
                          {convertedData.likes}
                        </Typography>
                      </Grid>
                      <Grid
                        container
                        item
                        xs="auto"
                        alignItems="center"
                        className={classes.dishIconWrapper}
                      >
                        {convertedData.isVegan && <VeganIcon />}
                        {convertedData.isGlutenFree && <GlutenFreeIcon />}
                        {convertedData.isVegetarian && <VegetarianIcon />}
                        {convertedData.isLactoseFree && <LactoseFreeIcon />}
                      </Grid>
                    </Grid>
                  </Grid>
                  <RoundedLink to={link}>Read more</RoundedLink>
                </Grid>
              </ScrollAnimation>
            </Box>
          </ErrorMessage>
        )}
      </Grid>
      {/* Часть с параллаксом */}
      <Grid
        container
        item
        xs={12}
        md={6}
        lg={7}
        xl={8}
        className={classes.parallaxWrapper}
      >
        <Grid item xs={12} className={classes.recipeOfTheDayImage}>
          <ScrollAnimation
            offset={10}
            animateIn={
              matches ? "animate__slideInLeft" : "animate__slideInDown"
            }
            duration={2}
            animatePreScroll
            animateOnce
          >
            <img
              src={
                convertedData !== undefined ? convertedData.image : undefined
              }
              alt="Recipe"
            />
          </ScrollAnimation>
        </Grid>
        <Parallax strength={100} className={classes.parallax}>
          <Background>
            <img src={parallaxBg} alt="bg" />
          </Background>
        </Parallax>
      </Grid>
    </Grid>
  );
}

RecipeOfTheDay.propTypes = {
  setRecipeId: PropTypes.func,
};

export default RecipeOfTheDay;
