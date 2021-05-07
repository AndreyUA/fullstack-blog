import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Styled components
const PaginationWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 100px;
  width: 750px;
  background-color: #edeeef;
  margin: 0 auto;
  border-radius: 10px;
`;
const PaginationArrowButton = styled.button`
  width: 40px;
  height: 26px;
`;
// bug with styles of active button
const PaginationNavButton = styled(PaginationArrowButton)`
  background-color: ${(props) => (props.isActive ? "red" : "white")};
`;

// React component
const Pagination = ({ quantity, navPostsHandler, actualNumber }) => {
  const arrButton = [];

  for (let i = 1; i <= quantity; i++) {
    arrButton.push(
      <PaginationNavButton
        isActive={i === actualNumber}
        onClick={() => navPostsHandler(i - 1)}
        key={i}
      >
        {i}
      </PaginationNavButton>
    );
  }

  return (
    <PaginationWrapper>
      <PaginationArrowButton onClick={() => navPostsHandler(actualNumber - 1)}>
        &#60;
      </PaginationArrowButton>
      {arrButton}
      <PaginationArrowButton onClick={() => navPostsHandler(actualNumber + 1)}>
        &#62;
      </PaginationArrowButton>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  actualNumber: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  navPostsHandler: PropTypes.func.isRequired,
};

export default Pagination;
