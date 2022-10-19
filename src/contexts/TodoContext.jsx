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
        todo: text,
        check : false,
      }])
      setText("")
   }

   const deleteTodo = (id) => {
      const listFiltred = list.filter(e => e.id !== id)
      setList(listFiltred)
   }

   const setCheck = (id) => {
      const index = list.findIndex(e => e.id === id)
      list[index].check = !list[index].check
      setList([...list])
    }

   return (
      <TodoContext.Provider value={{text,setText,deleteTodo,addTodo,list,setList,setCheck}}>
         {children}
      </TodoContext.Provider>
   )
}