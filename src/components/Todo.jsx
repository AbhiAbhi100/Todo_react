

import React, { useEffect, useRef, useState } from 'react'
import laptop from '../assets/laptop.png'
import TodoItems from './TodoItems'

const Todo = () => {

  const inputRefrence = useRef();

  const [todoList,setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);


  console.log("ajbigbig")
  const add =()=>{
    const inputText = inputRefrence.current.value.trim();
    
    if(inputText==""){
      return null;
    }

    const newTodo ={
      id:Date.now(),
      text: inputText,
      isComplete:false,
    }


    setTodoList((prev)=>[...prev,newTodo]);
    inputRefrence.current.value="";
  }


  const deleteTodo = (id)=>{
    setTodoList((prevTodos)=>{
     return prevTodos.filter((todo)=> todo.id !== id)
    })
  }

 const toggle = (id)=>{
    setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
        }

        return todo;

      })
    })
 }


 useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todoList));
 },[todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl overflow-auto'>
      


      {/* title */}

    <div className='flex items-center mt-7 gap-2'>
            <img className='w-32' src={laptop}  />
            <h1 className='bg-teal-500 w-48 h-10 rounded-md text-lg font-semibold text-center py-1 mx-auto border-2 border-black rotate-2'>Task-Manager</h1>
    </div>
            
    <div>
    <h2 className='text-xl font-bold my-4 text-center underline'>My Tasks</h2>
    </div>


        {/* input-box */}



    <div className='flex'>

    <input type="text" ref={inputRefrence} className='w-64 h-10 border-2 border-dashed border-pink-600 rounded-md px-2 outline-none' placeholder='Add your task' />
    <button onClick={add} className='mx-5 w-28 h-9 bg-green-300 border-2 border-double border-black rounded-md text-sm font-medium shadow-sm hover:bg-gray-100 rotate-3'>Add Task</button>

    </div>



    {/*--todo list-- */}

      <div>

    {todoList.map((item,index)=>{
      return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
    })}

      
        </div> 
      

    </div>

    

  )
}

export default Todo
