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
 
  ]);


//FUNCAO PEGA O ARRAY ATUAL E CRIA UM NOVO ADICIONANDO UM OBEJTO A MAIS NO ARRAY. ONDE O TITLE É PASSADO PELO PARAMETRO DESTA FUNCAO
const handleTaskAddition=(tasktitle)=>{
     const newTasks=[
      ...tasks,{
      title:tasktitle,
      id:Math.random(10),
      completed:false

     }]
     setTasks(newTasks) //PASSA PARA A FUNCAO DO STATE DE TAREFAS O NOVO ARRAY COM DADOS ATUALIZADOS
};

// O COMPONENTE TASK É UM FILHO DO APP, LOGO PODE HERDAR AS PROPS DE APP. NO CASO PASSEI COMO PROPS AS TAKS QUE É UM ARRAY E ESTA COMO STATES O QUE POSSIBILITA SOFRER ALTERACOES
  return (
    <>
      <div className="container">
          <AddTask handleTaskAddition ={handleTaskAddition}/>
          <Tasks tasks={tasks}/> 
       
      </div>
    </>
  );
};

export default App;
