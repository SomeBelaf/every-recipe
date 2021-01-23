import React from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.primary.lighterest}`,
  },
  sectionTitleWrapper: {
    marginBottom: `${theme.spacing(1)}px`,
  },
  sectionTitleIcon: {
    maxWidth: "40px",
    marginRight: theme.spacing(2),
  },
  sectionTitle: {
    fontWeight: 700,
  },
}));

function RecipeSection({ children, title, withIcon, icon }) {
  const classes = useStyles();
  return (
    <Grid container item xs={12} direction="column" className={classes.section}>
      <Grid container item xs={12} className={classes.sectionTitleWrapper}>
        {withIcon && (
          <img src={icon} className={classes.sectionTitleIcon} alt="" />
        )}
        <Typography variant="h4" className={classes.sectionTitle}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}

RecipeSection.defaultProps = {
  withIcon: false,
};
RecipeSection.propTypes = {
  title: PropTypes.string.isRequired,
  withIcon: PropTypes.bool.isRequired,
  icon: PropTypes.string,
};

export default RecipeSection;
