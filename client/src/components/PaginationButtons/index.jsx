import React from "react";
import Pagination from "@material-ui/lab/Pagination";

// React component
const PaginationButtons = ({ qty, active, handleChange }) => {
  console.log(active);

  return (
    <Pagination
      count={qty}
      color="primary"
      page={active + 1}
      onChange={(_, active) => {
        console.log(active);

        handleChange(active - 1);
      }}
    />
  );
};

export default PaginationButtons;
