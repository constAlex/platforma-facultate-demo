import { connect } from "react-redux";
import MainForm from "../MainForm";
import {
  adaugaProgramare,
  stergeProgramare,
  updateProgramare,
} from "./actions";

const mapStateToProps = (state) => {
  return {
    programari: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    adaugaProgramare: (programare) => dispatch(adaugaProgramare(programare)),
    stergeProgramare: () => dispatch(stergeProgramare()),
    updateProgramare: () => dispatch(updateProgramare()),
  };
};
export const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainForm);
