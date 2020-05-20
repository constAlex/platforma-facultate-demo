import { connect } from "react-redux";
import Main from "../../components/Main";

const mapStateToProps = (state) => {
  return {
    programari: state.programari,
  };
};

export const MainContainer = connect(mapStateToProps)(Main);
