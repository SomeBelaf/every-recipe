import React, { useState, useEffect } from "react";
/*---------------Import components---------------*/
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import RecipesList from "../RecipesList/RecipesList";
import TagsList from "../TagsList/TagsList";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tagListWrapper: {
    alignSelf: "center",
    marginBottom: theme.spacing(8),
  },
}));

const arrOfTags = ["vegetarian", "dessert", "dinner", "salad", "soup"];

function PopularRecipes(props) {
  const classes = useStyles();


  const [tagData, setTagData] = useState(arrOfTags[0]); // данние для заппроса

  const changeTagData = (data) => setTagData(data);


  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs="auto">
        <Box component="section" pb={4} pt={6}>
          <SectionTitle title="Popular recipes" align="center" type="h3" />
        </Box>
      </Grid>
      <Grid item xs="auto" className={classes.tagListWrapper}>
        <TagsList changeTagData={changeTagData} arrOfTags={arrOfTags} />
      </Grid>
      <Grid item xs={12}>
        <ErrorBoundary variant="h5">
          <RecipesList
            link={`https://api.spoonacular.com/recipes/random?apiKey=105c45c3c46749d4a2344c632ce5f2de&number=9&tags=${tagData}`}
          />
        </ErrorBoundary>
      </Grid>
    </Grid>
  );
}

export default PopularRecipes;
