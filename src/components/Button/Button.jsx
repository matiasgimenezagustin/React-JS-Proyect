import React from 'react';

//Tambien puedo desestructrarlo en la llamada props

const Button = ({texto, color}) => {
    
    console.log(texto, color);
    //!)_ Aplicacion de una desestructuracion

/*    const {texto: texto, color: color} = props; */

    //Ecma script permite si en nombre y value son iguales ponerlo como
    
/*     const {texto, color} = props; */

    return (
        <>
            <button style = {{backgroundColor: color }}>
                {texto ? texto : "texto normie"}
            </button>
        </>
    );
}

export default Button;