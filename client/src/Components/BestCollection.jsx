import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import image from "../best_collection.webp";
import image2 from "../jeans.webp";
import image3 from "../clothes1.png";
import image4 from "../clothes2.png";
import image5 from "../clothes3.png";

import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  image: {
    height: "15px",
    width: "500px",
    marginTop: "400px",
    marginLeft: "600px",
  },
  title: { marginTop: "150px", height: "150px", marginRight: "900px" },
  button: { marginRight: "900px" },
  jean: { marginRight: "900px", marginTop: "70px" },
  clothes: {
    marginLeft: "1300px",
  },
}));

const Bestcollection = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item>
          <div className={classes.image}>
            <img alt="complex" src={image} />
          </div>
        </Grid>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={3}>
            <Grid item xs>
              <Typography
                className={classes.title}
                gutterBottom
                variant="subtitle1"
              >
                <h1>Best Collection of This Month</h1>
                <h5> Designers who are interesten crea.</h5>
              </Typography>

              <Grid item>
                <div className={classes.button}>
                  <Button variant="contained" color="primary">
                    Shop now
                  </Button>
                </div>
                <div className={classes.jean}>
                  <img alt="complex" src={image2} />
                </div>
              </Grid>
              <Grid item>
                <div className={classes.clothes}>
                  <img alt="complex" src={image3} />

                  <img alt="complex" src={image4} />

                  <img alt="complex" src={image5} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Bestcollection;
