import { connect } from "react-redux";
import MainForm from "../MainForm";
import {
  adaugaProgramare,
  stergeProgramare,
  updateProgramare,
} from "./actions";

const mapStateToProps = (state) => {
  return {
    programari: state.programari,
    programare: state.programare,
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
