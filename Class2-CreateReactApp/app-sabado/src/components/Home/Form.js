import React from 'react';

const Form = ({handleChange, data, dirty, handleSubmit}) => (
    <form className="form-container" onSubmit={handleSubmit} >
        <label htmlFor="">Name:
            <input type="text" name="name" onChange={handleChange} />
            {data.name.length <= 3 && dirty ? <span>Hace falta caracteres</span> : "" }
        </label>
        <label htmlFor="">Age:
            <input type="number" step="1" name="age" onChange={handleChange} />
        </label>
        <button type="submit">Agregar</button>
    </form>
);

export default Form;