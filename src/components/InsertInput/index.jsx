import { useContext } from "react"
import { TodoContext } from "../../contexts/TodoContext"
import { FormStyle } from "./style"

export const InsertInput = () => {
   const {text,setText,addTodo} = useContext(TodoContext)

   return (
      <FormStyle onSubmit={(e)=>{addTodo(e)}}>
         <div>
            <input required placeholder="Insert your activity" onChange={(e) => setText(e.target.value)} type="text" value={text}/>
            <button type="submit">Add</button>
        </div>
      </FormStyle>
   )
}