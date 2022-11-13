// ESSA É A CLASSE QUE CONTEM AS TASKS 

import React from "react";
import Task from "./Task";

//NO CASO {tasks} é um destruct de props . props é meio q um pacote de todas propriedades herdadas do pai, quando se intancia um componente dentro de outro
const Tasks = ({ tasks , handleTaskClick, handleTaskDeletion}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task 
        task={task} 
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
        />
        //
        //O COMPONENTE TASK SENDO INSTANCIADO AQUI, VIRA UM FILHO DE TASKS PODENDO RECEBER SUAS PROPS,
                          // QUE NO CASO É O MAP DAS PROPS QUE VEIO DO APP PARA O TASKS 
      ))}   
    </>
  );
};

export default Tasks; //serve para conseguir importar esse component em outros lugares
