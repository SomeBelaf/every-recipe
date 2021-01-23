import React from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  previewContainer: {
    position: "relative",
    padding: `${theme.spacing(9)}px 0  ${theme.spacing(7)}px `,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "fit-content",
    backgroundImage: (props) => `url("${props.image}")`,
    [theme.breakpoints.up(`md`)]: {
      padding: `${theme.spacing(11)}px 0 ${theme.spacing(9)}px`,
    },
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: "2",
      background:
        "linear-gradient(to bottom, rgba(40,41,43,0.6) 0%, rgba(40,41,43,0.55) 100%)",
    },
  },
  previewContent: {
    zIndex: "3",
    maxWidth: theme.breakpoints.values.xxl,
    padding: `0 ${theme.spacing(3)}px`,
    margin: "0 auto",
  },
  previewTitle: {
    fontWeight: 900,
    color: theme.palette.common.white,
    textShadow: `4px 4px ${theme.palette.common.black}`,
  },
}));

function RecipePreview(props) {
  const { title } = props;
  const classes = useStyles(props);
  return (
    <Grid container className={classes.previewContainer}>
      <Grid
        item
        container
        xs={12}
        direction="column"
        className={classes.previewContent}
      >
        <Typography variant="h2" className={classes.previewTitle}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
}

RecipePreview.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RecipePreview;
