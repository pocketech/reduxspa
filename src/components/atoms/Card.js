import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { pink } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RatingBox from "./RatingBox";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    alignSelf: "center"
  },
  liked: {
    color: pink[500]
  },
  ratingbox: {
    display: "flex",
    justifyContent: "space-between"
  },
  flex: {
    display: "flex",
    justifyContent: "space-around"
  }
}));

const LectureCard = ({ color, alias, cRating, eRating, description, teacher, lecture, semester }) => {
  const classes = useStyles();
  const [isLiked, setLike] = useState(false);
  const toggleLiked = () => setLike(!isLiked);
  return (
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="faculty" style={{ backgroundColor: color }}>
            {alias}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={lecture}
        subheader={teacher}
      />
      <CardContent>
        <RatingBox
          readOnly
          item="単位"
          value={eRating}
        />
        <RatingBox
          readOnly
          item="内容"
          value={cRating}
        />
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.flex}>
        <IconButton
          aria-label="add to favorites"
          onClick={() => toggleLiked()}
          className={isLiked ? classes.liked : ""}
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

export default LectureCard;