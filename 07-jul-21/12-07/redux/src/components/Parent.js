import React, { Fragment } from "react";
// step SIX
import { connect } from "react-redux";
import { changeName } from "../actions";
// import Child from "./Child"

const Parent = (props) => {
  const { store, changeName } = props;
  return (
    <Fragment>
      <button onClick={() => changeName("Jerome")}></button>
    </Fragment>
  );
};

const mapStateToProps = (store) => {
  return { store };
};
const mapDispatchToProps = { changeName };
export default connect(mapStateToProps, mapDispatchToProps)(Parent);
