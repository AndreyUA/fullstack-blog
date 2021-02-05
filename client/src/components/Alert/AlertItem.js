import React from "react";
import PropTypes from "prop-types";

import "./AlertItem.css";

const AlertItem = ({ alertItem }) => {
  const { msg, alertType } = alertItem;
  return (
    <div className={`AlertItem AlertItem_${alertType}`}>
      <h4>{msg}</h4>
    </div>
  );
};

AlertItem.propTypes = {
  alertItem: PropTypes.object.isRequired,
};

export default AlertItem;
