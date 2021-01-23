import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
/*---------------Import Material UI components---------------*/
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tag: {
    display: "block",
    cursor: "pointer",
    transition: `${theme.transitions.create(["all"], {
      duration: theme.transitions.duration.standard,
    })}`,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    "& h5": {
      textTransform: "capitalize",
    },
  },
  activeTag: {
    position: "relative",
    color: theme.palette.secondary.main,
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: `-${theme.spacing(1)}px`,
      width: "100%",
      height: 3,
      zIndex: 2,
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up("sm")]: {
      "&:after": {
        bottom: `-${theme.spacing(2)}px`,
      },
    },
  },
}));

function TagItem(props) {
  const { index, tag, active, handleTagClick, changeTagData } = props;
  const classes = useStyles(props);

  return (
    <Box
      component="a"
      className={clsx(classes.tag, { [classes.activeTag]: active })}
      onClick={() => {
        handleTagClick(index);
        changeTagData(tag);
      }}
    >
      <Typography variant="h5">{tag}</Typography>
    </Box>
  );
}

TagItem.propTypes = {
  index: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleTagClick: PropTypes.func.isRequired,
  changeTagData: PropTypes.func.isRequired,
};
export default TagItem;
