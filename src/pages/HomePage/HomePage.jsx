import React from "react";
/*---------------Import components---------------*/
import PopularRecipes from "../../containers/PopularRecipes/PopularRecipes";
import HomeIntro from "../../containers/HomeIntro/HomeIntro";
import RecipeOfTheDay from "../../components/RecipeOfTheDay/RecipeOfTheDay";
/*---------------Import Material UI components---------------*/
import Container from "@material-ui/core/Container";

function HomePage(props) {
  return (
    <>
      <Container maxWidth={false} disableGutters={true}>
        <HomeIntro />
      </Container>
      <Container maxWidth={false} disableGutters={true}>
        <RecipeOfTheDay />
      </Container>
      <Container maxWidth={false}>
        <PopularRecipes />
      </Container>
    </>
  );
}

export default HomePage;
