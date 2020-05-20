import { connect } from "react-redux";
import DeleteItemsMenu from '../../components/DeleteItemsMenu';
import {
  stergeProgramare,
} from "../actions";

const mapStateToProps = (state) => {
  return {
    programari: state.programari,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    stergeProgramare: (id) => dispatch(stergeProgramare(id)),
};
}
export const DeleteContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteItemsMenu);
