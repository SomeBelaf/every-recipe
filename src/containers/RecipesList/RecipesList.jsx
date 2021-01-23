import React, { useEffect } from "react";
import PropTypes from "prop-types";
/*---------------Import hooks---------------*/
import { useMakeRequest } from "../../hooks/useMakeRequest";
import { useConvertRecipeList } from "../../hooks/useConvertRecipeList";
/*---------------Import components---------------*/
import RecipesCard from "./RecipesCard/RecipesCard";
import { Loading } from "../../customizedComponents";
/*---------------Import Animation--------------*/
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
/*---------------Import Material UI components---------------*/
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// import testData from "../../test-data-info.json";

const useStyles = makeStyles((theme) => ({
  loading: {
    width: "fit-content",
    height: 400,
  },
}));

function RecipesList({ link }) {
  const classes = useStyles();

  const [makeRequest, data, hasError, error, isLoading] = useMakeRequest();
  const [convertedData, setData] = useConvertRecipeList();

  useEffect(() => {
    makeRequest(link);
    setData(data);
  }, [link, makeRequest, data, setData]);

  if (hasError) {
    throw new Error(error);
  }

  const card =
    convertedData !== undefined &&
    convertedData.map((item, i) => {
      return (
        <Grid key={i} item xs={12} sm={10} md={6} lg={4} xl={3}>
          <ScrollAnimation
            offset={10}
            animateIn="animate__slideInUp"
            duration={i / 2}
            animatePreScroll
            animateOnce
          >
            <RecipesCard
              id={item.id}
              name={item.name}
              isVegan={item.isVegan}
              isVegetarian={item.isVegetarian}
              isLactoseFree={item.isLactoseFree}
              isGlutenFree={item.isGlutenFree}
              image={item.image}
              dishTypes={item.dishTypes}
              likes={item.likes}
            />
          </ScrollAnimation>
        </Grid>
      );
    });

  return (
    <Grid container justify="center" spacing={2}>
      {isLoading || convertedData === undefined ? (
        <Box mx="auto" pt={14} className={classes.loading}>
          <Loading size={60} />
        </Box>
      ) : (
        card
      )}
    </Grid>
  );
}

RecipesList.propTypes = {
  link: PropTypes.string.isRequired,
  setRecipeId: PropTypes.func,
};

export default RecipesList;
