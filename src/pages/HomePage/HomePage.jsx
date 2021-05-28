import React from "react";
/*---------------Import Material UI components---------------*/
import Container from "@material-ui/core/Container";
/*---------------Import components---------------*/
import PopularRecipes from "../../containers/PopularRecipes/PopularRecipes";
import HomeIntro from "../../containers/HomeIntro/HomeIntro";
import RecipeOfTheDay from "../../components/RecipeOfTheDay/RecipeOfTheDay";

function HomePage() {
  return (
    <>
      <Container maxWidth={false} disableGutters>
        <HomeIntro />
      </Container>
      <Container maxWidth={false} disableGutters>
        <RecipeOfTheDay />
      </Container>
      <Container maxWidth={false}>
        <PopularRecipes />
      </Container>
    </>
  );
}

export default HomePage;
