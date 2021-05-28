import React, { useEffect } from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
/*---------------Import hooks---------------*/
import useMakeRequest from "../../hooks/useMakeRequest";
import useConvertNutrients from "../../hooks/useConvertNutrients";
/*---------------Import components---------------*/
import { Loading } from "../../customizedComponents";

// import testNutrientsData from "../../test-data-nutrients.json";

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "block",
    margin: `${theme.spacing(7)}px auto`,
  },
  container: {
    padding: ".4rem",
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: 6,
    backgroundColor: theme.palette.common.white,
  },
  sectionTitle: {
    fontWeight: "700",
  },
  bigLine: {
    border: "none",
    borderTop: `1rem solid ${theme.palette.common.black}`,
    margin: "1rem 0 .2rem",
    padding: "0",
  },
  smallLine: {
    border: "none",
    borderTop: `.3rem solid ${theme.palette.common.black}`,
    margin: ".2rem 0 ",
    padding: "0",
  },
  list: {
    "& li": {
      borderBottom: `1px solid ${theme.palette.common.black}`,
      "&:last-child": {
        borderBottom: "none",
      },
      "& h6": {
        fontWeight: 600,
      },
      "& span": {
        marginLeft: 4,
        color: theme.palette.secondary.main,
        fontWeight: 400,
      },
      "& strong": {
        float: "right",
        color: theme.palette.secondary.main,
      },
    },
  },
  percent: {
    width: "fit-content",
    margin: "0 0 0 auto",
    fontWeight: 600,
    color: theme.palette.secondary.main,
  },
}));

function NutritionFacts({ recipeId }) {
  const classes = useStyles();

  const [
    makeNutrientsRequest,
    nutrientsData,
    hasError,
    nutrientsError,
    nutrientsIsLoading,
  ] = useMakeRequest();

  const [convertedNutrientsData, setNutrientsData] = useConvertNutrients();

  useEffect(() => {
    makeNutrientsRequest(
      `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=105c45c3c46749d4a2344c632ce5f2de`
    );
    setNutrientsData(nutrientsData);
    // setNutrientsData(testNutrientsData);
  }, [recipeId, makeNutrientsRequest, setNutrientsData, nutrientsData]);

  if (hasError) {
    throw new Error(nutrientsError);
  }

  return nutrientsIsLoading || convertedNutrientsData === undefined ? (
    <Box className={classes.loading}>
      <Loading size={40} />
    </Box>
  ) : (
    <Grid container direction="column" className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.sectionTitle}>
          Nutrition Facts
        </Typography>
        <Box component="hr" className={classes.bigLine} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2">Amount Per Serving</Typography>
        <Box component="hr" className={classes.smallLine} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" className={classes.percent}>
          % Daily Value *
        </Typography>
        <Box component="ul" className={classes.list}>
          {convertedNutrientsData.nutrients.map((item, i) => (
            <Box key={i} component="li">
              <Typography variant="subtitle1">
                {item.title}
                <Box component="span">{item.amount}</Box>
                <Box component="strong">{item.percentOfDailyNeeds}%</Box>
              </Typography>
            </Box>
          ))}
        </Box>
        <Box component="hr" className={classes.smallLine} />
        <Box component="ul" className={classes.list}>
          <Box component="li">
            <Typography variant="subtitle1">
              Carbs
              <Box component="strong">{convertedNutrientsData.carbs}</Box>
            </Typography>
          </Box>
          <Box component="li">
            <Typography variant="subtitle1">
              Protein
              <Box component="strong">{convertedNutrientsData.protein}</Box>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption">
          * Percent Daily Values are based on a 2,000 calorie diet. Your daily
          value may be higher or lower depending on your calorie needs.
        </Typography>
      </Grid>
    </Grid>
  );
}

NutritionFacts.propTypes = {
  recipeId: PropTypes.string.isRequired,
};

export default NutritionFacts;
