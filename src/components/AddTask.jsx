import React from "react";
import "./AddTask.css";
import Button from "./Button";
import { useState } from "react";

// addtask recebe as props de onde ele esta instaciado, no caso no app , recebe a funcao que criar novos objetos numa lista de objetos ja existentes
const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState("");
                                          
  //                      FUNCOES QUE TAO SENDO USADAS NO COMPONENTE
  //funcao do onclick para adicionar nova tarefa ao array de objetos que contem as tarefas
  const handleAddTaskClick=()=>{
    handleTaskAddition(inputData)
    setInputData(" ") 
  }
   //funcao pra pegar o valor do input
   const handleInputChange = (e) => {
    setInputData(e.target.value)
    };

  return (
    <div className="add-task-container"> 
  
      <input 
      onChange={handleInputChange} //PEGA O VALOR QUE DIGITA NO INPUT
      value={inputData} //VALOR INICIAL DE DENTRO DO INPUT , ESSA VARIAVEL TRAS UMA STRING VAZIA
      className="add-task-input" // CLASSE PRA USAR NO CSS
      type="text" /> 

      <div className="add-task-button-container">
        <Button onclick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
