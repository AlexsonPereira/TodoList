import { useState } from "react"
import { TodoList } from "./style"
import { Item } from "../../components/Item"

export const HomePage = ({}) => {
   const [list,setList] = useState([])
   const [text,setText] = useState("")

   const addTodo = (e) => {
      e.preventDefault()
      setList([...list,{
        id : `${text}${list.length+1}`,
        todo: text
      }])
      setText("")
   }

   return (
         <TodoList>
            <form onSubmit={(e)=>{addTodo(e)}}>
               <div>
                  <input required placeholder="Insert your activity" onChange={(e) => setText(e.target.value)} type="text" value={text}/>
                  <button type="submit">Add</button>
               </div>
            </form>
            <ul>
               {list.map(e => <Item name={e.todo} key={e.id} id={e.id} setList={setList} list={list}/>)}
            </ul>
         </TodoList>
   )
}