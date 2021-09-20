import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bar: { display: "flex", marginTop: "80px", marginLeft: "50px" },
  titles: { display: "flex", marginLeft: "700px" },
  title: { marginLeft: "60px", marginTop: "30px" },
}));

const LatestProducts = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.bar}>
      <h1>Latest Products</h1>
      <div className={classes.titles}>
        <h4 className={classes.title}>All</h4>
        <h4 className={classes.title}>New</h4>
        <h4 className={classes.title}>Featured</h4>
        <h4 className={classes.title}>Offer</h4>
      </div>
    </div>
  );
};
export default LatestProducts;
