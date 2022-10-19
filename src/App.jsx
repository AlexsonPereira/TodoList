import React from "react"
import { TodoProvider } from "./contexts/TodoContext"
import { HomePage } from "./pages/HomePage"
import { GlobalStyle } from "./style/GlobalStyle"

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <HomePage/>
        <GlobalStyle/>
      </div>
    </TodoProvider>
  )
}

export default App
