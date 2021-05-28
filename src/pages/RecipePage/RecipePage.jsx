import React, { useState, useEffect } from "react";
/*---------------Import react-router---------------*/
import { useParams } from "react-router-dom";
/*---------------Import Material UI components---------------*/
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
/*---------------Import hooks---------------*/
import useMakeRequest from "../../hooks/useMakeRequest";
import useConvertRecipe from "../../hooks/useConvertRecipe";
/*---------------Import components---------------*/
import { Loading } from "../../customizedComponents";
import PrintButton from "../../components/PrintButton/PrintButton";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import RecipeImage from "../../components/RecipeImage/RecipeImage";
import RecipeFeatures from "../../components/RecipeFeatures/RecipeFeatures";
import RecipeSection from "../../components/RecipeSection/RecipeSection";
import RecipeIngredientsList from "../../components/RecipeIngredientsList/RecipeIngredientsList";
import RecipeInstruction from "../../components/RecipeInstruction/RecipeInstruction";
import NutritionFacts from "../../components/NutritionFacts/NutritionFacts";
import RequiredEquipment from "../../components/RequiredEquipment/RequiredEquipment";
import ModalPrintPreview from "../../components/ModalPrintPreview/ModalPrintPreview";
/*---------------Import images---------------*/
import listIcon from "../../images/list.png";
import bookIcon from "../../images/book.png";

// import testData from "../../test-data-one.json";

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "block",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  mainContent: {
    maxWidth: theme.breakpoints.values.xxl,
    margin: `${theme.spacing(5)}px auto 0`,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.common.white,
    borderRadius: 16,
    boxShadow: "0px 9px 24px 0px rgba(151,160,204,0.15)",
  },
  recipe: {
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: theme.spacing(3),
    },
  },
  widget: {
    marginBottom: theme.spacing(3),
  },
  printButton: {
    width: "100%",
    marginBottom: theme.spacing(3),
  },
}));

function RecipePage() {
  const classes = useStyles();

  const { recipeId } = useParams();

  const [openModal, setOpenModal] = useState(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const [
    makeRecipeRequest,
    recipeData,
    hasError,
    recipeError,
    recipeIsLoading,
  ] = useMakeRequest();

  const [convertedRecipeData, setDataToConvert] = useConvertRecipe("extended");

  useEffect(() => {
    makeRecipeRequest(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=105c45c3c46749d4a2344c632ce5f2de`
    );
    setDataToConvert(recipeData); // конвертировать данные рецепта || заменить testData на mainData
    // setDataToConvert(testData);
  }, [
    recipeId,
    makeRecipeRequest,
    setDataToConvert,
    convertedRecipeData,
    recipeData,
  ]);

  return (
    <Container maxWidth={false} disableGutters>
      {recipeIsLoading || convertedRecipeData === undefined ? (
        <Box className={classes.loading}>
          <Loading size={90} />
        </Box>
      ) : (
        <ErrorMessage
          hasError={hasError}
          errorInfo={recipeError}
          variant="h4"
          height="100%"
          margin="30% auto"
        >
          <RecipePreview
            image={convertedRecipeData.image}
            title={convertedRecipeData.name}
          />
          <Grid
            container
            alignItems="flex-start"
            className={classes.mainContent}
          >
            <Grid
              item
              container
              xs={12}
              md={8}
              lg={9}
              direction="column"
              alignItems="center"
              className={classes.recipe}
            >
              <Grid container item xs={12} xl={10}>
                <RecipeImage image={convertedRecipeData.image} />
              </Grid>
              <RecipeFeatures
                isVegan={convertedRecipeData.isVegan}
                isVegetarian={convertedRecipeData.isVegetarian}
                isLactoseFree={convertedRecipeData.isLactoseFree}
                isGlutenFree={convertedRecipeData.isGlutenFree}
                readyInMinutes={convertedRecipeData.readyInMinutes}
                servings={convertedRecipeData.servings}
              />
              <RecipeSection title="Main Ingredients" withIcon icon={listIcon}>
                <RecipeIngredientsList
                  ingredients={convertedRecipeData.ingredients}
                  animate
                  isRow={false}
                />
              </RecipeSection>
              <RecipeSection title="Instruction" withIcon icon={bookIcon}>
                <RecipeInstruction
                  instruction={convertedRecipeData.instruction}
                  animate
                />
              </RecipeSection>
            </Grid>
            <Grid container item direcction="column" xs={12} md={4} lg={3}>
              <PrintButton
                onClick={handleClickOpen}
                className={classes.printButton}
              >
                Print
              </PrintButton>
              <Grid item xs={12} className={classes.widget}>
                <ErrorBoundary variant="subtitle1">
                  <NutritionFacts recipeId={recipeId} />
                </ErrorBoundary>
              </Grid>
              <Grid item xs={12}>
                <ErrorBoundary variant="subtitle1">
                  <RequiredEquipment recipeId={recipeId} />
                </ErrorBoundary>
              </Grid>
            </Grid>
          </Grid>

          <ModalPrintPreview
            open={openModal}
            onClose={handleClose}
            recipeId={recipeId}
            title={convertedRecipeData.name}
            image={convertedRecipeData.image}
            ingredients={convertedRecipeData.ingredients}
            instruction={convertedRecipeData.instruction}
          />
        </ErrorMessage>
      )}
    </Container>
  );
}

export default RecipePage;
