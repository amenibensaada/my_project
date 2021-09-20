import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import category_image1 from "../category_image1.webp";
import category_image2 from "../category_image2.jpeg";
import category_image3 from "../category_image3.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "100px",

    marginLeft: "30px",
    marginRight: "40px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),

    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  image: {
    margin: "10px",
    width: "300px",
  },
  title: {
    textAlign: "center",
  },
}));

const Cards = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.image}>
        <img alt="complex" src={category_image1} />
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Owmen`S
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            New Collection
          </Typography>
        </CardContent>
      </div>

      <div className={classes.image}>
        <img alt="complex" src={category_image2} />
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Discount!
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Winter Cloth
          </Typography>
        </CardContent>
      </div>

      <div className={classes.image}>
        <img alt="complex" src={category_image3} />
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Man`S Cloth
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            New Collection
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};
export default Cards;
