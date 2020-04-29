import { connect } from 'react-redux';
import MainForm from '../MainForm';
import { ADAUGA_PROGRAMARE, STERGE_PROGRAMARE } from './actions';

const mapStateToProps = state => {
  return {
    programari: state.programari
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addProgramare: (programare) => dispatch({ type: ADAUGA_PROGRAMARE, programare }),
    stergereProgramare: () => dispatch({ type: STERGE_PROGRAMARE })
  }
};
export const FormContainer = connect(mapStateToProps, mapDispatchToProps)(MainForm);