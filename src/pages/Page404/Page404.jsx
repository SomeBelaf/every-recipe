import React, { useRef, useEffect } from "react";
/*---------------Import image---------------*/
import bgImage from "../../images/parallax_bg.jpg";
/*---------------Import Material UI components---------------*/
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  },
  textWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    textAlign: "center",
  },
  title: {
    fontSize: "10rem",
    textShadow: `3px 3px ${theme.palette.common.white}`,
    fontWeight: 600,
    [theme.breakpoints.up(`sm`)]: {
      fontSize: "15rem",
    },
  },
  supTitle: {
    fontSize: "2rem",
    textShadow: `3px 3px ${theme.palette.common.white}`,
    fontWeight: 600,
    [theme.breakpoints.up(`sm`)]: {
      fontSize: "3rem",
    },
  },
}));

function Page404(props) {
  const classes = useStyles();
  const parallaxElem = useRef();
  const parallaxWrapper = useRef();

  function parallax(e, layer) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const speed = layer.getAttribute("data-speed");
    const x = (width + e.pageX * speed) / 100;
    const y = (height + e.pageY * speed) / 100;
    layer.style.transform = `translate(calc(-50% - ${x}px), calc(-50% - ${y}px)) `;
  }

  useEffect(() => {
    parallaxWrapper.current.addEventListener("mousemove", (e) =>
      parallax(e, parallaxElem.current)
    );
  });

  return (
    <Box
      component="article"
      className={classes.container}
      ref={parallaxWrapper}
    >
      <Box
        component="section"
        ref={parallaxElem}
        data-speed="3"
        className={classes.textWrapper}
      >
        <Typography variant="h1" className={classes.title}>
          404
        </Typography>
        <Typography variant="h2" className={classes.supTitle}>
          Page Not Found!
        </Typography>
      </Box>
    </Box>
  );
}

export default Page404;
