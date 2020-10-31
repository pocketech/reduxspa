import React, { useState } from "react";
import Search from "../molecules/SearchField";
import CardList from "../molecules/CardList";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import PostModal from "../molecules/PostModal";
import Spacer from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      bottom: theme.spacing(10),
      right: theme.spacing(3),
    },
  }
}));

const Component = (props) => (
  <>
    <Spacer my={4} />
    <Search />
    <Spacer my={4} />
    <CardList />
    <PostModal open={props.isModalOpen} handleOpen={props.handleOpen} />
    <Fab
      color="secondary"
      aria-label="edit"
      className={props.classes.fab}
      onClick={() => props.handleOpen()}
    >
      <EditIcon />
    </Fab>
  </>
);
const Container = (props) => {
  const classes = useStyles();
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(!isModalOpen);
  const containerProps = { classes, handleOpen, isModalOpen };
  return <Component {...containerProps} {...props} />;
};
export default Container;
