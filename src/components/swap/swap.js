import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";
import "./swap.css";

const Swap = ({ swap, calculate }) => {
  return (
    <div className="swap">
      <button
        className="btn btn-outline-secondary"
        onClick={() => {
          swap();
          calculate();
        }}
      >
        Swap
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => {
  const { swap, calculate } = bindActionCreators(actions, dispatch);
  return {
    swap,
    calculate,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Swap);
