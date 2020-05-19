import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";

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

export default function CheckboxList({ programari, stergeProgramare }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [elemForDelete, adjustElem] = React.useState([]);

  const handleToggle = (value, id) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      adjustElem([...elemForDelete, id]);
    } else {
      newChecked.splice(currentIndex, 1);
      adjustElem(elemForDelete.filter((index) => index !== id));
    }

    // console.log(newChecked);
    setChecked(newChecked);
  };

  const handleDelete = (id) => () => {
    stergeProgramare(id);
  };

  const handleDeleteAll = () => {
    elemForDelete.forEach(el => stergeProgramare(el));
    setChecked([]);
  };

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
            onClick={handleToggle(index, el.id)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(index) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
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
                onClick={handleDelete(el.id)}
                edge="end"
                aria-label="comments"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
      {programari.length ? (
        <ListItem
          onClick={handleDeleteAll}
          className={classes.ListItem}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {<h3>Sterge elementele selectate</h3>}
          <IconButton edge="end" aria-label="comments">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ) : null}
    </List>
  );
}
