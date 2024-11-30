

import React from 'react'
import checkedIcon from '../assets/checked.png';
import uncheckedIcon from '../assets/unchecked.png';


const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2 '>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        <img   className='w-7 mr-4' src={isComplete ? checkedIcon:uncheckedIcon} alt="" />
        <p className={`text-slate-900 text-[20px]
           ${isComplete?"line-through":""}`}>{text}</p>
      </div>


    <button onClick={()=>{deleteTodo(id)}} className='ml-20 w-28 h-9 bg-green-300 border-1 border-double border-black rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100 rotate-2'>
        Dispose
    </button>




    </div>
  )
}

export default TodoItems
