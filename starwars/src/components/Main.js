import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Data from './Data';


const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  color: #4a4a4d;
  font-size: 0.99em;

  th, td {
    padding: 10px 15px;
    vertical-align: middle;
  }

  .tbody tr {
  background: #fff;
  }


  thead {
    background: #395870;
    background: linear-gradient(#49708f, #293f50);
    color: #fff;
    font-size: 11px;
    text-transform: uppercase;
  }

  .tbody tr:nth-child(even) {
    background: #f0f0f2;
  }

  td, th {
    border-bottom: 1px solid #cecfd5;
    border-right: 1px solid #cecfd5;
  }

  th:first-child {
    border-top-left-radius: 5px;
    text-align: left;
  }

  th:last-child {
    border-top-right-radius: 5px;
  }

  .tbody tr:last-child td:first-child {
    border-bottom-left-radius: 5px;
  }

  .tbody tr:last-child td:last-child {
    border-bottom-right-radius: 5px;
  }

`

const Main = (props) => {
  const data = props.data;

  return (
    <StyledTable>
      <Header/>
      <tbody className="tbody">
        {
          data.map((star, ind) => {
            return <Data star={star} key={ind}/>
          })
        }
      </tbody>
    </StyledTable>
  )
}

export default Main;
