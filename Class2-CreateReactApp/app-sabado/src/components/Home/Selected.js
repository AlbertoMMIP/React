import React from 'react';

const Selected = ({selection}) => (
    <div>
        <h4>Elemento seleccionado</h4>
        <p>Le picaste a {selection.name}</p>
    </div>
);

export default Selected;