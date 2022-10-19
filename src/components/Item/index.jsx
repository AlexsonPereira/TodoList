import { useContext } from "react"
import { AiFillDelete } from "react-icons/ai"
import { BsCheckLg } from "react-icons/bs"
import { TodoContext } from "../../contexts/TodoContext"
import { Li } from "./style"

export const Item = ({name, id , check}) => {
  const {deleteTodo,setCheck} = useContext(TodoContext)
  
   return (
      <Li check={check}>
        <h3>{name}</h3>
        <div>
          <div onClick={()=> setCheck(id)} className="checkbox">
            {check && <BsCheckLg/>}
          </div>
          <AiFillDelete onClick={()=> deleteTodo(id)}/>
        </div>
      </Li>
   )
}