import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import image from "../assets/home.webp";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  image: {
    height: "15px",
    width: "500px",
    marginTop: "40px",
    backgroundSize: "cover",
  },
  title: { marginTop: "200px", height: "150px" },
  title2: { marginTop: "500px", marginBottom: "10px" },
  background: {
    backgroundColor: "#C8EBFF",
  },
}));

const HomeImage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Grid container spacing={2}>
          <Grid item>
            <div className={classes.image}>
              <img alt="complex" src={image} />
            </div>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="subtitle1"
                >
                  <h1>Winter collection</h1>
                  <h5> Best Cloth Collection By 2021 !! </h5>
                </Typography>
                <div className={classes.button}>
                  <Button variant="contained" color="primary">
                    Shop now
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.title2}>
        <h1> Shop by Category</h1>
      </div>
    </div>
  );
};
export default HomeImage;
