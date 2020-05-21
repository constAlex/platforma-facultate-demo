import { connect} from "react-redux";
import { bindActionCreators } from 'redux';
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
const mapDispatchToProps = dispatch => 
 bindActionCreators({adaugaProgramare,updateProgramare},dispatch);

export const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainForm);