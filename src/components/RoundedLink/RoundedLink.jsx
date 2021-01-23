import React from "react";
import PropTypes from "prop-types";
/*---------------Import react-router-dom--------------*/
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    cursor: "pointer",
    outline: "none",
    textTransform: "uppercase",
    textDecoration: "none",
    fontSize: "0.875rem",
    color: theme.palette.primary.light,
    lineHeight: "1.75",
    fontWeight: "600",
    border: `2px solid ${theme.palette.primary.light}`,
    borderRadius: "10em",
    padding: "5px 15px",
    transition: `${theme.transitions.create(["all"], {
      duration: theme.transitions.duration.short,
    })}`,
    "&:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      zIndex: "-1",
      transform: "translate(-50%, -50%)",
      width: "80%",
      height: "130%",
      background: theme.palette.primary.light,
      borderRadius: "5em",
      transition: `${theme.transitions.create(["all"], {
        duration: theme.transitions.duration.short,
      })}`,
      animation: "$scaleAnimation 3s linear infinite",
      opacity: 0,
    },
    "&:hover": {
      color: theme.palette.secondary.main,
      border: `2px solid ${theme.palette.secondary.main}`,
      backgroundColor: "transparent",
      "&:after": {
        opacity: "0",
      },
    },
    "&:focus": {
      "&:after": {
        opacity: "0.5",
      },
    },
  },
  "@keyframes scaleAnimation": {
    "0%": { transform: "translate(-50%, -50%) scale(1)" },
    "50%": { transform: "translate(-50%, -50%) scale(1.1)" },
    "100%": { transform: "translate(-50%, -50%) scale(1)" },
  },
}));

function RoundedLink(props) {
  //   const { to } = props;
  const classes = useStyles();
  return (
    <Link className={classes.link} {...props}>
      {props.children}
    </Link>
  );
}

RoundedLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default RoundedLink;
