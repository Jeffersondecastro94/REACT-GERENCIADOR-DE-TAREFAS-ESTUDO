import React from "react";
import "./Button.css"


const Button = ({ children, onclick }) => {

  return (
    //NO CASO ESTAMOS SIMULANDO QUE ESTAMOS USANDO ESSE COMPONENTE E QUE DENTRO DELE TEM O ADICIONAR QUE É SEU CHILDREN. 
    // ENTAO ELE RECEBENDO O CHILDREN ACIMA , TRAS ESSE VALOR E PODEMOS USAR ELE COMO MOSTRADO A SEGUIR
    <>
      <button onClick={onclick} className="button"> {children} </button> 
    </>
  );
};



export default Button;
