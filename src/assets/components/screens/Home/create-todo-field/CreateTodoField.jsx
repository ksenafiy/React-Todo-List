import { useState } from "react"

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev =>[
            {
                id: new Date(),
                title,
                isCompleted: false
            },
            ...prev,
        ])
        setTitle('')
    }

    return (
        <div className="flex items-center justify-between mb-4 mt-20 rounded-xl border-gray-800 border-2 px-5 py-2 w-full">
            <input 
                type="text" onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyDown={e => e.key === 'Enter' && addTodo(title)}
                className="bg-transparent w-full border-none outline-none"
                placeholder="New task..."
            />
            <button onClick={() => addTodo(title)} className="bg-red-700 px-3 py-1 rounded-md text-sm text-black font-bold transition-all hover:bg-red-900 hover:ease-in-out">Add</button>
        </div>
    )
}

export default CreateTodoField