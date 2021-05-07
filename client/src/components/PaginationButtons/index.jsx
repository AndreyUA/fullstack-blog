import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Styled components
const PaginationButtonsWrapper = styled.div``;
const PaginationNavButton = styled.button`
  width: 40px;
  height: 26px;
  border-radius: 5px;
  background-color: ${(props) => (props.isActive ? "coral" : "#0060fc")};
  outline: none;
  border: 0;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  margin: 0 10px;

  &:hover {
    opacity: 0.6;
  }
`;

// React component
const PaginationButtons = ({ qty, active, handleChange }) => {
  const arrButton = [];

  if (qty < 10) {
    for (let i = 1; i <= qty; i++) {
      arrButton.push(
        <PaginationNavButton
          isActive={i - 1 === active}
          onClick={() => handleChange(i - 1)}
          key={i}
        >
          {i}
        </PaginationNavButton>
      );
    }

    return <PaginationButtonsWrapper>{arrButton}</PaginationButtonsWrapper>;
  } else {
    for (let i = 1; i <= 9; i++) {
      arrButton.push(
        <PaginationNavButton
          isActive={i - 1 === active}
          onClick={() => handleChange(i - 1)}
          key={i}
        >
          {i}
        </PaginationNavButton>
      );
    }

    arrButton.push(<PaginationNavButton>&#8230;</PaginationNavButton>);

    return <PaginationButtonsWrapper>{arrButton}</PaginationButtonsWrapper>;
  }
};

PaginationButtons.propTypes = {
  qty: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PaginationButtons;
