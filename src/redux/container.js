import { connect } from "react-redux";
import Main from "../Main";
import MainForm from "../MainForm";
import DeleteItemsMenu from '../DeleteItemsMenu';
import {
  adaugaProgramare,
  stergeProgramare,
  updateProgramare,
} from "./actions";

const mapStateToProps = (state) => {
  return {
    programari: state.programari,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    adaugaProgramare: (programare) => dispatch(adaugaProgramare(programare)),
    stergeProgramare: (id) => dispatch(stergeProgramare(id)),
    updateProgramare: (programare, id) =>
      dispatch(updateProgramare(programare, id)),
  };
};
export const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainForm);

export const MainContainer = connect(mapStateToProps)(Main);
export const DeleteContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteItemsMenu);
