import React from 'react';

const Item = ({item,hadleClick}) => (
    <li onClick={ () => hadleClick(item) } >
        <p>{item.name} tiene {item.age}</p>
    </li>
);

export  default Item;