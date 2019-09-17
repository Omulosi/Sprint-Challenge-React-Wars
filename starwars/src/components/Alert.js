import React from 'react';
import styled from 'styled-components';


const StyledAlert = styled.div`
  position: absolute;
  background: rgb(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;

  p {
    position: relative;
    top: 20%;
    font-weight: lighter;
    color: white;
    text-align: center;
    font-size: 3em;
  }
`

const Alert = (props) => {
  const { message } = props;

  return (
    <StyledAlert>
      <p>{message}</p>
    </StyledAlert>
  )
}

export default Alert;
