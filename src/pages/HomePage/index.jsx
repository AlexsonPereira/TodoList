import { TodoList } from "./style"
import { Item } from "../../components/Item"
import { InsertInput } from "../../components/InsertInput"
import { useContext } from "react"
import { TodoContext } from "../../contexts/TodoContext"

export const HomePage = ({}) => {
   const {list} = useContext(TodoContext)
   return (
         <TodoList>
            <InsertInput/>
            <ul>
               {list && list.map(e => <Item name={e.todo} key={e.id} id={e.id} check={e.check} />)}
            </ul>
         </TodoList>
   )
}