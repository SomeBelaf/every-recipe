import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loading: {
    padding: `${theme.spacing(3)}px 0 `,
    width: "fit-content",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
  },
  recipeCard: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    top: 0,
    left: "50%",
    transform: "translate(-50%, 0)",
    [theme.breakpoints.up("md")]: {
      top: "50%",
      left: 0,
      transform: "translate(0, -50%)",
    },
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
  },
  recipeTitle: {
    letterSpacing: "1px",
    fontWeight: 400,
    marginBottom: theme.spacing(1),
  },
  recipeInfo: {
    [theme.breakpoints.up("md")]: {
      maxWidth: 450,
    },
  },
  recipeDesc: {
    borderBottom: "1px dashed rgba(0,0,0,0.2)",
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  dishTypeListWrapper: {
    marginBottom: theme.spacing(1),
  },
  dishIconWrapper: {
    alignSelf: "flex-end",
  },
  likeIcon: {
    marginRight: theme.spacing(1),
    fill: theme.palette.like,
  },
  likeText: {
    color: theme.palette.primary.lighter,
  },
  recipeOfTheDayImage: {
    position: "absolute",
    overflow: "hidden",
    width: "90%",
    zIndex: "1",
    top: 0,
    left: "50%",
    marginTop: "-1px",
    transform: "translate(-50%, 0)",
    borderRadius: "0 0  15px 15px",
    "& img": {
      width: "100%",
      display: "block",
    },
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "fit-content",
      top: "50%",
      left: 0,

      marginLeft: "-1px",
      transform: "translate(0, -50%)",
      borderRadius: "0 15px 15px 0",
    },
  },
  parallaxWrapper: {
    position: "relative",
    height: 370,
    [theme.breakpoints.up("sm")]: {
      height: 420,
    },
    [theme.breakpoints.up("md")]: {
      height: 450,
    },
  },
  parallax: {
    height: "100%",
    width: "100%",
  },
}));

export default useStyles;
