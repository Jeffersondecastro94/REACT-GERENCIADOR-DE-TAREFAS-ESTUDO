import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import "./components/Tasks";
import Tasks from "./components/Tasks";

const App = () => {
  //TASK É UM ARRAY QUE ESTA COMO STATE, O QUE POSSIBILITA SOFRER ALTERACAOES, UTILIZANDO A FUNCAO DO SEGUNDO PARAMETRO
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "ESTUDAR PROGRAMACAO",
      completed: "false",
    },
    {
      id: "2",
      title: "JOGAR",
      completed: "true",
    },
    {
      id: "2",
      title: "andar",
      completed: "true",
    },
    {
      id: "2",
      title: "arthur",
      completed: "true",
    },
  
    {
      id: "2",
      title: "jefferson",
      completed: "true",
    },
  ]);

// O COMPONENTE TASK É UM FILHO DO APP, LOGO PODE HERDAR AS PROPS DE APP. NO CASO PASSEI COMO PROPS AS TAKS QUE É UM ARRAY E ESTA COMO STATES O QUE POSSIBILITA SOFRER ALTERACOES
  return (
    <>
      <div className="container">
          <AddTask/>
          <Tasks tasks={tasks}/> 
       
      </div>
    </>
  );
};

export default App;
