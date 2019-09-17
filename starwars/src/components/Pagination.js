import React from 'react';
import styled from 'styled-components';

const StyledPaginator = styled.div`
   
  a,span {
    padding: 7px 18px;
    border: 1px solid #eee;
    margin-left: -2px;
    margin-right: -2px;
    background-color: #ffffff;
    display: inline-block;
    cursor: pointer;
}
`

const Paginator = (props) => {

  const {handleNext, handlePrev } = props;

  return (
    <StyledPaginator>
      <span onClick={handlePrev}>&laquo; Prev</span>
      <span onClick={handleNext}>Next &raquo;</span>
    </StyledPaginator>
  )
}

export default Paginator;
