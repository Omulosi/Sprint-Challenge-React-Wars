import React from 'react';

const Data = (props) => {
  const { star } = props;
  return (
      <tr>
        <td>{star.name}</td>
        <td>{star.gender}</td>
        <td>{star.height}</td>
        <td>{star.mass}</td>
        <td>{star.skin_color}</td>
        <td>{star.hair_color}</td>
      </tr>
  )
}

export default Data;
