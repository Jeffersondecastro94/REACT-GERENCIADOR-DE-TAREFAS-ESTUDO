//AQUI É A CLASSE DE MARCAR COMMO FEITO A TAREFA, FAZER APARECER A BARRINHA
// ESSA É O COMPONENTE ITEM
import React from "react";
import "./Task.css";
import { CgClose } from "react-icons/cg";
import { CgInfo } from "react-icons/cg";
//ESSAS PROPS PODE SER QUALQUER COISA, ARRAY, FUNCAO , ETC
const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  //RECEBEMOS A TASK QUE É A LISTA DE TAREFAS. ELA VEM DO APP.
  //ABAIXO TEMOS UMA DIV QUE ESTILIZA ELA CASO SEU .COMPLETED SEJA VERDADEIRO OU FALSO
  // E MAIS A BAIXO SERVE PARA AO CLICAR EM UM ITEM DA LISTA MUDAR SEU ESTADO DE COMPLETO PRA TRUE OU FALSE , FAZENDO
  //FUNCIONAR A CONDICAO DE MUDAR A COR ACIMA
  return (
    <div
      className="task-container "
      style={task.completed ? { borderLeft: "6px solid red" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button className="see-task-details-button">
          <CgInfo />
        </button>

        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
