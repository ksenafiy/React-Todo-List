import { useState } from "react"
import TodoItem from "./item/TodoItem"

import CreateTodoField from "./create-todo-field/CreateTodoField"
import QuoteGenerator from "./quote-generator/QuoteGenerator"

const data = []

const Home = () => {

    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => setTodos([...todos].filter(t => t.id !== id))

    return(
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">TODO <span className="text-red-700">LIST</span></h1>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
            ))}
            <CreateTodoField setTodos={setTodos}/>
            <QuoteGenerator />
        </div>
    )
}

export default Home