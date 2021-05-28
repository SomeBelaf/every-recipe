import React from "react";
import PropTypes from "prop-types";
/*---------------Import Animation--------------*/
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
/*---------------Import Material UI components---------------*/
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  instructionList: {
    marginTop: "2rem",
    counterReset: "instructionList",
  },
  instructionItem: {
    display: "flex",
    position: "relative",
    marginBottom: "2rem",
    color: theme.palette.primary.lighter,
    paddingLeft: "3.5rem",
    "&:after": {
      counterIncrement: "instructionList",
      content: "counter(instructionList)",
      position: "absolute",
      top: "50%",
      left: 0,
      transform: "translateY(-50%);",
      lineHeight: "1",
      fontSize: "1rem",
      fontWeight: "600",
      border: `2px solid ${theme.palette.primary.lighter}`,
      borderRadius: "50%",
      opacity: 0.5,
      padding: "0.6em 0.9em",
    },
  },
  instructionListDot: {
    display: "inline-block",
    marginRight: 15,
    padding: "0.6em 0.9em",
    height: "fit-content",
    opacity: 0.5,
    lineHeight: "1",
    fontSize: "1rem",
    fontWeight: "600",
    border: `2px solid ${theme.palette.primary.lighter}`,
    borderRadius: "50%",
  },
}));

function RecipeInstruction({ instruction, animate }) {
  const classes = useStyles();
  return (
    <Box component="ul" className={classes.instructionList}>
      {instruction.map((item, i) =>
        animate ? (
          <ScrollAnimation
            key={i}
            offset={10}
            animateIn="animate__fadeIn"
            duration={i / 2}
            animatePreScroll
            animateOnce
          >
            <Box component="li" className={classes.instructionItem}>
              <Typography variant="body1">{item}</Typography>
            </Box>
          </ScrollAnimation>
        ) : (
          <Box key={i} component="li" className={classes.instructionItem}>
            <Typography variant="body1">{item}</Typography>
          </Box>
        )
      )}
    </Box>
  );
}

RecipeInstruction.propTypes = {
  instruction: PropTypes.arrayOf(PropTypes.string).isRequired,
  animate: PropTypes.bool,
};
RecipeInstruction.defaultProps = {
  animate: false,
};

export default RecipeInstruction;
