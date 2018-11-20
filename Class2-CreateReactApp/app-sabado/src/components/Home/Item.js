import React from 'react';

const Item = ({deleteItem,item,hadleClick,index}) => (
    <li onClick={ () => hadleClick(item) } >
        <p>{item.name} tiene {item.age}</p>
        <button onClick={() => deleteItem(index)} >Borrar</button>
    </li>
);

export  default Item;