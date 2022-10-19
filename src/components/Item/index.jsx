import { useState } from "react"
import { AiFillDelete } from "react-icons/ai"
import { BsCheckLg } from "react-icons/bs"
import { Li } from "./style"

export const Item = ({name, id ,setList ,list}) => {
  const [check,setCheck] = useState(false)
  const deleteTodo = () => {
    const listFiltred = list.filter(e => e.id !== id)
    setList(listFiltred)
  }
   return (
      <Li className="checked" check={check}>
        <h3>{name}</h3>
        <div>
          <div onClick={()=> setCheck(!check)} className="checkbox">
            {check && <BsCheckLg/>}
          </div>
          <AiFillDelete onClick={()=> deleteTodo()}/>
        </div>
      </Li>
   )
}