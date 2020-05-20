import { connect } from "react-redux";
import UpdateItemMenu from '../../components/UpdateItemsList';

const mapStateToProps = (state) => {
  return {
    programari: state.programari,
  };
};



export const UpdateListContainer = connect(mapStateToProps)(UpdateItemMenu);
