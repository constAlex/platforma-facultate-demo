import { connect } from "react-redux";
import DeleteItemsMenu from '../../components/DeleteItemsMenu';
import { bindActionCreators } from 'redux';
import {
  stergeProgramare,
} from "../actions";

const mapStateToProps = (state) => {
  return {
    programari: state.programari,
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({stergeProgramare},dispatch);

export const DeleteContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteItemsMenu);
