import React from "react";
import "./AddTask.css";
import Button from "./Button";
import { useState } from "react";

const AddTask = () => {
  const [inputData, setInputData] = useState("kkkkkooo");

  const handleInputChange = (e) => {
  setInputData(e.target.value)

  };

  return (
    <div className="add-task-container">
      
      <input 
      onChange={handleInputChange} 
      value={inputData}
      className="add-task-input" 
      type="text" />

      <div className="add-task-button-container">
        <Button>Adicionar</Button>
      </div>

    </div>
  );
};

export default AddTask;
