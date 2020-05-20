import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    background: "linear-gradient(to left, #ee9ca7, #ffdde1)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 60,
    "&$expanded": {
      minHeight: 45,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
    justifyContent: "center",
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "rgba(81, 220, 255, 0.404)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "60%",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Main({ programari }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState("");

  const handleClick = (id) => {
    if (open === id) {
      setOpen(false);
    } else {
      setOpen(id);
    }
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListItemText component="div" id="nested-list-subheader">
          {programari.length === 0
            ? "Programari inexistente"
            : "Programari Active"}
        </ListItemText>
      }
      className={classes.root}
    >
      <div>
        <br />
        {programari.length === 0 && (
          <Typography variant="h4">
            Programeaza un examen pentru a incepe.
          </Typography>
        )}
        {programari.map((programare) => (
          <div
            style={{ border: "1px solid black", marginBottom: "5px" }}
            key={programare.id}
          >
            <ExpansionPanel
              square
              expanded={open === programare.id}
              onClick={() => handleClick(programare.id)}
            >
              <ExpansionPanelSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>{programare.materie}</Typography>
                {open === programare.id ? <ExpandLess /> : <ExpandMore />}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <ListItem>Specializarea: {programare.specializare}</ListItem>
                  <ListItem>Profesor: {programare.profesor}</ListItem>
                  <ListItem>Sesiune: {programare.sesiune}</ListItem>
                  <ListItem>Anul: {programare.an_univ}</ListItem>
                  <ListItem>An Studii: {programare.an_stud}</ListItem>
                  <ListItem>Data Examen: {programare.data_exam}</ListItem>
                  <ListItem>Ora Examen: {programare.ora_exam}</ListItem>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        ))}
      </div>
    </List>
  );
}

export default Main;
