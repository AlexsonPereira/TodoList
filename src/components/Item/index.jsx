import { useContext, useState } from "react"
import { AiFillDelete } from "react-icons/ai"
import { BsCheckLg } from "react-icons/bs"
import { TodoContext } from "../../contexts/TodoContext"
import { Li } from "./style"

export const Item = ({name, id}) => {
  const {deleteTodo} = useContext(TodoContext)
  const [check,setCheck] = useState(false)
  console.log(id)


   return (
      <Li className="checked" check={check}>
        <h3>{name}</h3>
        <div>
          <div onClick={()=> setCheck(!check)} className="checkbox">
            {check && <BsCheckLg/>}
          </div>
          <AiFillDelete onClick={()=> deleteTodo(id)}/>
        </div>
      </Li>
   )
}