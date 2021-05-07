import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { rgba } from "polished";
import Pagination from "@material-ui/lab/Pagination";

// Styled components
const PaginationWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: transparent;
  margin: 0 auto;
  border-radius: 10px;

  .material-pagination {
    background-color: #edeeef;
    padding: 10px;
    border-radius: 10px;

    &::after {
      display: none;
    }

    button.Mui-selected {
      background-color: #0060fc;
    }

    .MuiPaginationItem-page:hover {
      background-color: ${rgba("#0060fc", 0.4)};
    }
  }
`;

// TODO: fixed alert in console
// key prop for pagination

// React component
const PaginationBlock = ({ quantity, navPostsHandler, actualNumber }) => {
  return (
    <PaginationWrapper>
      <Pagination
        classes={{
          root: "material-pagination",
          button: "material-label",
        }}
        size="large"
        count={quantity}
        color="primary"
        page={actualNumber + 1}
        onChange={(_, actualNumber) => {
          navPostsHandler(actualNumber - 1);
        }}
      />
    </PaginationWrapper>
  );
};

PaginationBlock.propTypes = {
  actualNumber: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  navPostsHandler: PropTypes.func.isRequired,
};

export default PaginationBlock;
