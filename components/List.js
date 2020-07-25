import React from 'react';

function List() {
  const list = [
    'internship1',
    'internship2',
    'internship3',
    'internship4',
    'internship5',
    'internship6',
    'internship7',
  ];

  return (
    <div>
      {list.map((el) => (
        <div key={el}>{el}</div>
      ))}
    </div>
  );
}

export default List;
