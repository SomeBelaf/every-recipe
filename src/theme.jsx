import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
// #e9be79
let theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 270,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1300,
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
  },
  palette: {
    common: {
      black: "#3B3B3B",
    },
    primary: {
      lightest: "#cecece",
      lighter: "#747373",
      light: "#5a5a5a",
      main: "#3B3B3B",
      dark: "#333",
    },
    success: { main: "#6f962ccc" },
    secondary: { main: "#ff4535" },
    info: { main: "#0f174a" },
    bgColor: "#f4f8f9",
    like: "#ec7465",
  },
  transitions: {
    easing: {
      easeOut: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
      easeIn: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
      easeInOut: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
      sharp: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    duration: {
      standard: 400,
      short: 350,
      shorter: 300,
      shortest: 250,
      enteringScreen: 325,
      leavingScreen: 295,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          // fontSize: "62.5%",
        },
        body: {
          color: "#3B3B3B",
          backgroundColor: "#f4f8f9",
        },
        ul: {
          listStyle: "none",
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiTypography: {
      h6: {
        fontSize: "1.35rem",
        "@media (min-width: 576px)": {
          fontSize: "1.35rem",
        },
        "@media (min-width: 768px)": {
          fontSize: "1.35rem",
        },
      },
    },
    MuiButton: {
      root: {
        transition: "all 350ms ease-in-out 0ms",
        color: "#5a5a5a",
      },
      outlined: {
        borderRadius: "10em",
        fontWeight: 600,
        border: "2px solid #5a5a5a",
        "&:hover": {
          color: "#ff4535",
          backgroundColor: "transparent",
          border: "2px solid #ff4535",
        },
      },
    },
    MuiInputBase: {
      input: {
        fontWeight: "500",
        color: "#3B3B3B",
      },
    },
    MuiPaper: {
      root: {
        color: "#3B3B3B",
      },
      elevation1: {
        boxShadow: "6px 6px 15px 3px rgba(0,0,0,0.2)",
      },
      rounded: {
        borderRadius: 16,
      },
    },
    MuiCardMedia: {
      root: {
        borderRadius: 16,
        overflow: "hidden",
        margin: 16,
      },
    },
    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: 8,
          paddingTop: 0,
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        padding: "0 1rem",
      },
      notchedOutline: {
        borderRadius: "10em",
        border: `2px solid #3B3B3B`,
        borderColor: "initial",
      },
    },
    MuiAutocomplete: {
      root: {
        maxWidth: "24rem",
      },
      inputRoot: {
        padding: "0.3rem 2.8rem 0.3rem 1.8rem !important",
      },
    },
    MuiDialogContent: {
      root: {
        "&::-webkit-scrollbar ": {
          width: "10px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#888",
        },
        " &::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      },
    },
    MuiGrid: {
      "grid-xs-auto": {
        maxWidth: "fit-content",
      },
      "spacing-xs-1": {
        margin: 0,
        width: "100%",
      },
      "spacing-xs-2": {
        margin: 0,
        width: "100%",
      },
      "spacing-xs-3": {
        margin: 0,
        width: "100%",
      },
      "spacing-xs-4": {
        margin: 0,
        width: "100%",
      },
      "spacing-xs-5": {
        margin: 0,
        width: "100%",
      },
      "spacing-xs-6": {
        margin: 0,
        width: "100%",
      },
      "spacing-xs-7": {
        margin: 0,
        width: "100%",
      },
      "spacing-xs-8": {
        margin: 0,
        width: "100%",
      },
      "spacing-xs-9": {
        margin: 0,
        width: "100%",
      },
      "spacing-xs-10": {
        margin: 0,
        width: "100%",
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
