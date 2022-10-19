import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext({})

export const TodoProvider = ({children}) => {
   const [list,setList] = useState([])
   const [text,setText] = useState("")

   useEffect(()=>{
      const localItens = JSON.parse(localStorage.getItem("@itens"))
      if(!!localItens){
         setList(localItens)
      }
   },[])
   
   useEffect(()=>{
     localStorage.setItem("@itens",JSON.stringify(list))
   },[list])

   const addTodo = (e) => {
      e.preventDefault()
      setList([...list,{
        id : `${text}${list.length+1}`,
        todo: text
      }])
      setText("")
      localStorage.setItem("@itens",JSON.stringify(list))
   }

   const deleteTodo = (id) => {
      const listFiltred = list.filter(e => e.id !== id)
      setList(listFiltred)
   }

   return (
      <TodoContext.Provider value={{text,setText,deleteTodo,addTodo,list,setList}}>
         {children}
      </TodoContext.Provider>
   )
}