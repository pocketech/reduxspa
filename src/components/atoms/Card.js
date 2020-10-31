import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, pink } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "0,auto"
  },
  avatar: {
    backgroundColor: red[500]
  },
  liked: {
    color: pink[500]
  },
  ratingbox: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [isLiked, setLike] = useState(false);
  const toggleLiked = () => setLike(!isLiked);
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="faculty" className={classes.avatar}>
            人科
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="医療人類学
        "
        subheader="辻内琢也
        "
      />
      <CardContent>
        <div className={classes.ratingbox}>
          <Box>
            <Typography>単位</Typography>
            <Rating name="read-only" value="2" readOnly />
          </Box>
          <Box>
            <Typography>内容</Typography>
            <Rating name="read-only" value="2" readOnly />
          </Box>
        </div>
        <Typography variant="body2" color="textSecondary" component="p">
          出席が厳しく、５分でも遅れると欠席扱いとなる。講師が現役の医師であるため、医療に興味がある人にとっては面白いのかもしれない。
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => toggleLiked()}
          className={isLiked && classes.liked}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
