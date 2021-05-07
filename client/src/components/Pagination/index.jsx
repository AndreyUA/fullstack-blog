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
  border-radius: 5px;
  background-color: #1cbf1c;
  outline: none;
  border: 0;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;
const PaginationNavButton = styled(PaginationArrowButton)`
  background-color: ${(props) => (props.isActive ? "coral" : "#0060fc")};
`;

// React component
const Pagination = ({ quantity, navPostsHandler, actualNumber }) => {
  const arrButton = [];

  for (let i = 1; i <= quantity; i++) {
    arrButton.push(
      <PaginationNavButton
        isActive={i - 1 === actualNumber}
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
