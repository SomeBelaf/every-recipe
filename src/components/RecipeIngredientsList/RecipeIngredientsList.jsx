import React, { useState } from "react";
import PropTypes from "prop-types";
/*---------------Import components---------------*/
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
/*---------------Import Animation--------------*/
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
/*---------------Import Material UI components---------------*/
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

function RecipeIngredientsList({ ingredients, isRow, animate }) {
  const [ingredientsList, setIngredientList] = useState(
    ingredients.reduce((acc, cur) => ({ ...acc, [cur]: false }), {})
  );

  const handleChange = (event) => {
    setIngredientList({
      ...ingredientsList,
      [event.target.value]: event.target.checked,
    });
  };
  // ((?!([\d\/\d]))\w|\,)+
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="Checkbox list" row={isRow}>
        {Object.entries(ingredientsList).map((item, i) =>
          animate ? (
            <ScrollAnimation
              key={i}
              offset={10}
              animateIn="animate__fadeIn"
              duration={i / 2}
              animatePreScroll
              animateOnce
            >
              <FormControlLabel
                value={item[0]}
                label={item[0]}
                labelPlacement="end"
                checked={item[1]}
                onChange={handleChange}
                control={<CustomCheckbox />}
              />
            </ScrollAnimation>
          ) : (
            <FormControlLabel
              key={i}
              value={item[0]}
              label={item[0]}
              labelPlacement="end"
              checked={item[1]}
              onChange={handleChange}
              control={<CustomCheckbox />}
            />
          )
        )}
      </FormGroup>
    </FormControl>
  );
}

RecipeIngredientsList.defaultProps = {
  animate: false,
};
RecipeIngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired,
  isRow: PropTypes.bool.isRequired,
};

export default RecipeIngredientsList;
