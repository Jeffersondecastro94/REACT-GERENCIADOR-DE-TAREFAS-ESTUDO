import React from "react";
import "./AddTask.css";
import Button from "./Button";
import { useState } from "react";


// addtask recebe as props de onde ele esta instaciado, no caso no app , recebe a funcao que criar novos objetos numa lista de objetos ja existentes
const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState("");

  //funcao pra pegar o valor do input
  const handleInputChange = (e) => {
  setInputData(e.target.value)
  };

  //funcao do onclick para adicionar nova tarefa ao array de objetos que contem as tarefas
  const handleAddTaskClick=()=>{
    handleTaskAddition(inputData)

  }

  return (
    <div className="add-task-container">
      
      <input 
      onChange={handleInputChange} 
      value={inputData}
      className="add-task-input" 
      type="text" />

      <div className="add-task-button-container">
        <Button onclick={handleAddTaskClick}>Adicionar</Button>
      </div>

    </div>
  );
};

export default AddTask;
