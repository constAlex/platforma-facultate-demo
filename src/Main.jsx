import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
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
  const [open, setOpen] = React.useState('0');

  const handleClick = (id) => (event, newExpanded) => {
    setOpen(newExpanded ? id : false);
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Programari Actived
        </ListSubheader>
      }
      className={classes.root}
    >
      <div>
        {programari.map((programare, index) => (
          <div style={{border: "1px solid black", marginBottom: "5px"}} key={programare.id}>
            <ExpansionPanel square expanded={open === programare.id} onChange={handleClick(programare.id)}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{programare.materie}</Typography>
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
            {/* <Collapse in={open === programare.id} timeout="auto" unmountOnExit>
              <ListItem>Specializarea: {programare.specializare}</ListItem>
              <ListItem>Profesor: {programare.profesor}</ListItem>
              <ListItem>Sesiune: {programare.sesiune}</ListItem>
              <ListItem>Anul: {programare.an_univ}</ListItem>
              <ListItem>An Studii: {programare.an_stud}</ListItem>
              <ListItem>Data Examen: {programare.data_exam}</ListItem>
              <ListItem>Ora Examen: {programare.ora_exam}</ListItem>
            </Collapse> */}
          </div>
        ))}
      </div>
    </List>
  );
}

export default Main;
