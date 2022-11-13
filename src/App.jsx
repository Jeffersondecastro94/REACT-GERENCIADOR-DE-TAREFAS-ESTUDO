import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import "./components/Tasks";
import Tasks from "./components/Tasks";
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header";
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

//roda o array de tarefas 
  //conclui tarefa , mudando seu completed para true se estiver false
  const handleTaskClick=(taskId)=>{
    const newTasks=tasks.map((task)=>{
      if( task.id===taskId) return {...task,completed :!task.completed}
      return task;
    })
    setTasks(newTasks) //é a funcao que esta como segundo estado do state da lista de tarefas
}

//FUNCAO PEGA O ARRAY ATUAL E CRIA UM NOVO ADICIONANDO UM OBEJTO A MAIS NO ARRAY. ONDE O TITLE É PASSADO PELO PARAMETRO DESTA FUNCAO
const handleTaskAddition=(tasktitle)=>{
     const newTasks=[
      ...tasks,{
      title:tasktitle,
      id:uuidv4(),
      completed:false

     }]
     setTasks(newTasks) //PASSA PARA A FUNCAO DO STATE DE TAREFAS O NOVO ARRAY COM DADOS ATUALIZADOS
};

//FACO AS FUNCOES AQ PQ É ONDE TEM A LISTA PRA FAZER O FILTER ETC
//ESSA FUNCAO FAZ MOSTRAR TODOS OS ITENS MENOS O QUE FOI FILTRADO , LOGO ELE SOME DANDO SENSACAO DE DELETADO, POIS CRIA UMA NOVA LISTA DE TAREFAS 

const handleTaskDeletion=(taskId)=>{
    const newTask= tasks.filter((task)=>task.id!== taskId);
    setTasks(newTask)
}



// O COMPONENTE TASK É UM FILHO DO APP, LOGO PODE HERDAR AS PROPS DE APP. NO CASO PASSEI COMO PROPS AS TAKS QUE É UM ARRAY E ESTA COMO STATES O QUE POSSIBILITA SOFRER ALTERACOES
  return (
    <>
      <div className="container">
          <Header/>
          <AddTask handleTaskAddition ={handleTaskAddition}/>
          <Tasks 
          tasks={tasks} 
          handleTaskClick={handleTaskClick} 
          handleTaskDeletion={handleTaskDeletion} //PASSANDO ESSA FUNCAO COMO PROPS PRA OUTRO COMPONENTE
          /> 
       
      </div>
    </>
  );
};

export default App;
