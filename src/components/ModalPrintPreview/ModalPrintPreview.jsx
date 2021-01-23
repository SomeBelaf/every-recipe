import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import listIcon from "../../images/list.png";
import bookIcon from "../../images/book.png";
/*---------------Import components---------------*/
import PrintButton from "../PrintButton/PrintButton";
import RecipeImage from "../RecipeImage/RecipeImage";
import RecipeFeatures from "../RecipeFeatures/RecipeFeatures";
import RecipeSection from "../RecipeSection/RecipeSection";
import RecipeIngredientsList from "../RecipeIngredientsList/RecipeIngredientsList";
import RecipeInstruction from "../RecipeInstruction/RecipeInstruction";
import NutritionFacts from "../../components/NutritionFacts/NutritionFacts";
import RequiredEquipment from "../../components/RequiredEquipment/RequiredEquipment";
/*---------------Import Material UI components---------------*/
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modalTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  recipeTitle: {
    fontWeight: 900,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
}));

function ModalPrintPreview(props) {
  const {
    onClose,
    open,
    recipeId,
    title,
    isVegan,
    isVegetarian,
    isLactoseFree,
    isGlutenFree,
    image,
    readyInMinutes,
    servings,
    ingredients,
    instruction,
  } = props;
  const classes = useStyles();

  const modalContent = useRef();

  const defaultValue = {
    "Recipe Image": false,
    "Recipe Features": false,
    "Recipe Ingredients": true,
    "Recipe Instruction": true,
    "Nutrition Facts": false,
    "Required Equipment": false,
  };
  const [requiredSections, setRequiredSections] = useState(defaultValue);

  const handleChange = (event) => {
    setRequiredSections({
      ...requiredSections,
      [event.target.value]: event.target.checked,
    });
  };

  function renderRequiredSections(state, componentName, component) {
    const stateArr = Object.entries(state);
    for (let i = 0; i <= Object.entries(state).length; i++) {
      const name = stateArr[i][0];
      const isChecked = stateArr[i][1];
      if (componentName === name && isChecked) {
        return component;
      } else if (i === stateArr.length - 1) {
        return null;
      }
    }
  }

  function printHTML(input) {
    const iframe = document.createElement("iframe"); // create the element
    const styles = Array.from(
      document.querySelectorAll("style"),
      (item) => item.outerHTML
    ); // поличить стили с страницы, потом поместить в iframe
    document.body.appendChild(iframe); // insert the element to the DOM
    iframe.style.display = "none";
    iframe.contentWindow.document.head.innerHTML = styles;
    iframe.contentWindow.document.body.innerHTML = input; // write the HTML to be printed
    iframe.contentWindow.print(); // print it
    document.body.removeChild(iframe); // remove the iframe from the DOM
  }

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="modal-print-preview"
      open={open}
      fullWidth={true}
      maxWidth="lg"
    >
      <DialogTitle disableTypography={true} className={classes.modalTitle}>
        <Typography variant="h5">Print Preview</Typography>
        {onClose ? (
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>

      <DialogContent>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={9} md={10}>
            <FormControl component="fieldset">
              <FormGroup aria-label="Checkbox list" row>
                {Object.entries(requiredSections).map((item, i) => (
                  <FormControlLabel
                    key={i}
                    value={item[0]}
                    label={item[0]}
                    labelPlacement="end"
                    checked={item[1]}
                    onChange={handleChange}
                    control={<Checkbox color="secondary" />}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <PrintButton
              onClick={() => printHTML(modalContent.current.innerHTML)}
            >
              Print
            </PrintButton>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          ref={modalContent}
        >
          <Grid container item xs="auto" style={{ margin: "0 auto" }}>
            {/*исправить, убрать style*/}
            <Typography variant="h2" className={classes.recipeTitle}>
              {title}
            </Typography>
          </Grid>
          {renderRequiredSections(
            requiredSections,
            "Recipe Image",
            <Grid container item xs={8} style={{ margin: "0 auto" }}>
              {/*исправить, убрать style*/}
              <RecipeImage image={image} />
            </Grid>
          )}
          {renderRequiredSections(
            requiredSections,
            "Recipe Features",
            <RecipeFeatures
              isVegan={isVegan}
              isVegetarian={isVegetarian}
              isLactoseFree={isLactoseFree}
              isGlutenFree={isGlutenFree}
              readyInMinutes={readyInMinutes}
              servings={servings}
            />
          )}
          {renderRequiredSections(
            requiredSections,
            "Recipe Ingredients",
            <RecipeSection title="Main Ingredients">
              <RecipeIngredientsList
                ingredients={ingredients}
                isRow={true}
                icon={listIcon}
              />
            </RecipeSection>
          )}
          {renderRequiredSections(
            requiredSections,
            "Recipe Instruction",
            <RecipeSection title="Instruction">
              <RecipeInstruction instruction={instruction} icon={bookIcon} />
            </RecipeSection>
          )}
          {renderRequiredSections(
            requiredSections,
            "Nutrition Facts",
            <NutritionFacts recipeId={recipeId} />
          )}
          {renderRequiredSections(
            requiredSections,
            "Required Equipment",
            <RequiredEquipment recipeId={recipeId} />
          )}
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

ModalPrintPreview.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  recipeId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isVegan: PropTypes.bool.isRequired,
  isVegetarian: PropTypes.bool.isRequired,
  isLactoseFree: PropTypes.bool.isRequired,
  isGlutenFree: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  readyInMinutes: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired,
  ingredients: PropTypes.array.isRequired,
  instruction: PropTypes.array.isRequired,
};

export default ModalPrintPreview;
