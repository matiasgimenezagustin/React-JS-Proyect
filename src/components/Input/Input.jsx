import React from 'react';
import "./input.css";

function Input({ handleExtraer, id }) {
    return (
        <div>
            <input id={"input-" + id} type="text" />
            <button onClick={() => handleExtraer(document.querySelector("#input-" + id).value)}>Extraer</button>
        </div>
    );
}

export default Input;