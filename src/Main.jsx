import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Main({ programari }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Programari Active
        </ListSubheader>
      }
      className={classes.root}
    >
      <div>
        {programari.map((programare) => (
          <div style={{border: "1px solid black", marginBottom: "5px"}} key={programare.id}>
            <ListItem button onClick={handleClick}>
              <ListItemText primary={programare.materie} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <ListItem>Specializarea: {programare.specializare}</ListItem>
              <ListItem>Profesor: {programare.profesor}</ListItem>
              <ListItem>Sesiune: {programare.sesiune}</ListItem>
              <ListItem>Anul: {programare.an_univ}</ListItem>
              <ListItem>An Studii: {programare.an_stud}</ListItem>
              <ListItem>Data Examen: {programare.data_exam}</ListItem>
              <ListItem>Ora Examen: {programare.ora_exam}</ListItem>
            </Collapse>
          </div>
        ))}
      </div>
    </List>
  );
}

export default Main;
