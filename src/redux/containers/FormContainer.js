import { connect} from "react-redux";
import MainForm from "../../components/MainForm";
import {
  adaugaProgramare,
  updateProgramare
} from "../actions";

const mapStateToProps = (state) => {
  return {
    programari: state.programari,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    adaugaProgramare: (programare) => dispatch(adaugaProgramare(programare)),
    updateProgramare: (programare, id) =>
      dispatch(updateProgramare(programare, id)),
};
}
export const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainForm);