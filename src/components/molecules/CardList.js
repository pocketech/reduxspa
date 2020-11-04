import React from "react";
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles";
import { getReview } from '../../store/postSlice'
import Grid from "@material-ui/core/Grid";
import Card from "../atoms/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CardList() {
  const classes = useStyles();
  const reviewList = useSelector(getReview);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        {reviewList.length > 0 && (
          reviewList.map(review => (
            <Grid item xs={12} sm={6} md={4} key={review.id}>
              <Card cRating={review.cRating} eRating={review.eRating} description={review.description} teacher={review.teacher} lecture={review.lecture} color={review.facultyObj.color} alias={review.facultyObj.alias} semester={review.semesterObj.name} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}




// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Card from "../atoms/Card";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }
// }));

// export default function FullWidthGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3} >
//         <Grid item xs={12} sm={6} md={4} >
//           <Card />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
