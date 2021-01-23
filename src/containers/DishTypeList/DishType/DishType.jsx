import React from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  DishTypeItem: {
    display: "inline-block",
    margin: 3,
    padding: "2px 6px",
    border: `1px solid ${theme.palette.info.main}`,
    borderRadius: 5,
    transition: `${theme.transitions.create(["all"], {
      duration: theme.transitions.duration.shorter,
    })}`,
    "&:hover": {
      transform: "scale(1.07)",
    },
  },
  DishTypeLink: {
    cursor: "pointer",
    textTransform: "capitalize",
    textDecoration: "none",
    color: theme.palette.info.main,
    fontWeight: 300,
  },
}));
/**Возможно убрать ссилку */
function DishType({ dishType }) {
  const classes = useStyles();
  return (
    <Box component="li" className={classes.DishTypeItem}>
      <Box component="a" className={classes.DishTypeLink}>
        <Typography variant="caption">{dishType}</Typography>
      </Box>
    </Box>
  );
}
DishType.propTypes = {
  dishType: PropTypes.string,
};

export default DishType;
