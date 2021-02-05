import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./Alert.css";
import AlertItem from "./AlertItem";

import { connect } from "react-redux";

const Alert = ({ alert }) => {
  return (
    <div className="Alert">
      {alert.length > 0
        ? alert.map((alertItem) => (
            <Fragment key={alertItem.id}>
              {" "}
              <AlertItem alertItem={alertItem} />{" "}
            </Fragment>
          ))
        : null}
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
