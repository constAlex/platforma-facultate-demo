import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "60%",
    paddingLeft: "20px",
  },
  ListItem: {
    background: "linear-gradient(to left, #ee9ca7, #ffdde1)",
    marginBottom: "10px",
    "&:nth-child(1)": {
      border: "1px solid green",
    },
  },
}));

export default function UpdateList({ programari}) {
  const classes = useStyles();
  const history = useHistory();
  
  return (
    <List className={classes.root}>
      <ListItemText component="div" id="nested-list-subheader">
        {programari.length === 0
          ? "Programari inexistente"
          : "Programari Active"}
      </ListItemText>
      {programari.length === 0 && (
        <Typography variant="h4" style={{ marginTop: "20px" }}>
          Programeaza un examen pentru a incepe.
        </Typography>
      )}
      {programari.map((el, index) => {
        const labelId = `checkbox-list-label-${el.materie}`;
        return (
          <ListItem
            className={classes.ListItem}
            key={el.id}
            role={undefined}
            dense
            button
          >
            <ListItemText
              id={labelId}
              primary={
                el.materie +
                " - in data de " +
                el.data_exam +
                ", ora " +
                el.ora_exam +
                ", specializarea " +
                el.specializare +
                ", Profesor " +
                el.profesor
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                onClick={()=> history.push(`/modificare/${el.id}`)}
                edge="end"
                aria-label="comments"
              >
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
