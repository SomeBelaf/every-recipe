import React, { useState } from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
/*---------------Import components---------------*/
import TagItem from "./TagItem/TagItem";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    transition: `${theme.transitions.create(["all"], {
      duration: theme.transitions.duration.standard,
    })}`,
    "&:after": {
      content: '""',
      display: "none",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: `-${theme.spacing(2)}px`,
      width: "150%",
      height: 3,
      backgroundColor: theme.palette.primary.lightest,
    },
    [theme.breakpoints.up("md")]: {
      "&:after": {
        display: "block",
      },
    },
    [theme.breakpoints.up("lg")]: {
      "&:after": {
        width: "200%",
      },
    },
    [theme.breakpoints.up("xl")]: {
      "&:after": {
        width: "250%",
      },
    },
  },
  listItem: {
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(3),
    "&:last-child": {
      marginRight: 0,
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0,
    },
  },
}));

function TagsList(props) {
  const { changeTagData, arrOfTags } = props;
  const classes = useStyles(props);

  const [currentTag, setCurrentTag] = useState(0);

  const changeTag = (index) => setCurrentTag(index);

  const tags = arrOfTags.map((item, i) => {
    return (
      <Grid item xs="auto" key={i} className={classes.listItem}>
        <TagItem
          tag={item}
          index={i}
          active={i === currentTag}
          handleTagClick={changeTag}
          changeTagData={changeTagData}
        />
      </Grid>
    );
  });

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      {tags}
    </Grid>
  );
}

TagsList.propTypes = {
  changeTagData: PropTypes.func.isRequired,
  arrOfTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default TagsList;
