import React, { useEffect } from "react";
import PropTypes from "prop-types";
/*---------------Import Material UI components---------------*/
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
/*---------------Import hooks---------------*/
import useMakeRequest from "../../hooks/useMakeRequest";
import useConvertEquipment from "../../hooks/useConvertEquipment";
/*---------------Import components---------------*/
import { Loading } from "../../customizedComponents";

// import testEquipmentData from "../../test-data-equipment.json";

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "block",
    margin: `${theme.spacing(7)}px auto`,
  },
  container: {
    padding: ".4rem",
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: 6,
    backgroundColor: theme.palette.common.white,
  },
  sectionTitle: {
    color: theme.palette.common.black,
    fontWeight: "700",
    margin: `${theme.spacing(1)}px 0 ${theme.spacing(2)}px`,
  },
  smallLine: {
    border: "none",
    borderTop: `.3rem solid ${theme.palette.common.black}`,
    margin: ".2rem 0 ",
    padding: "0",
  },
  equipmentImg: {
    "& img": {
      maxWidth: "100%",
    },
  },
  equipmentName: {
    textTransform: "capitalize",
  },
}));

function RequiredEquipment({ recipeId }) {
  const classes = useStyles();
  const [
    makeEquipmentRequest,
    equipmentData,
    hasError,
    equipmentError,
    equipmentIsLoading,
  ] = useMakeRequest();

  const [convertedEquipmentData, setEquipmentData] =
    useConvertEquipment(equipmentData);

  useEffect(() => {
    makeEquipmentRequest(
      `https://api.spoonacular.com/recipes/${recipeId}/equipmentWidget.json?apiKey=105c45c3c46749d4a2344c632ce5f2de`
    );
    setEquipmentData(equipmentData);
    // setEquipmentData(testEquipmentData);
  }, [recipeId, makeEquipmentRequest, setEquipmentData, equipmentData]);

  if (hasError) {
    throw new Error(equipmentError);
  }

  return equipmentIsLoading || convertedEquipmentData === undefined ? (
    <Box className={classes.loading}>
      <Loading size={40} />
    </Box>
  ) : (
    <Grid container direction="column" className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Required Equipment
        </Typography>
        <Box component="hr" className={classes.smallLine} />
      </Grid>
      {convertedEquipmentData.map((item, i) => (
        <Grid key={i} item container alignItems="center" xs={12} spacing={1}>
          <Grid item xs={4} className={classes.equipmentImg}>
            <img src={item.image} alt="" />
          </Grid>
          <Grid item xs={8} className={classes.equipmentName}>
            <Typography variant="h6">{item.name}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

RequiredEquipment.propTypes = {
  recipeId: PropTypes.string.isRequired,
};

export default RequiredEquipment;
