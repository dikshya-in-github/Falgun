import { useState } from "react"

export default function Todos() {
    let todosData = [
        {
            title: "Html",
            status: false,
        },
        {
            title: "Css",
            status: false,
        },
        {
            title: "Javascript",
            status: false,
        },
    ]

    const [todoList, setTodoList] = useState([...todosData])
    const [newTodos, setNewTodos] = useState("")

    function addTodos(event) {
        event.preventDefault()
        setTodoList([...todoList, { title: newTodos, status: true }])
    }

    function handleChange(event) {
        setNewTodos(event.target.value)
    }

    function toggleStatus(idx) {
        let temp = [...todoList]
        temp[idx].status = !temp[idx].status
        setTodoList(temp)
    }

    function deleteTodos(idx) {
        let temp = [...todoList]
        temp.splice(idx, 1)
        setTodoList(temp)
    }

    return (
        <>
            <h2>Todos</h2>

            <form onSubmit={addTodos}>
                <input required type="text" onChange={handleChange} />
                <button> Add </button>
            </form>

            <ul className="list">
                {todoList.map((el, idx) => {
                    return (
                        <li key={idx}>
                            <input
                                type="checkbox"
                                checked={el.status}
                                onChange={() => {
                                    toggleStatus(idx)
                                }}
                            />
                            <span className={`${el.status ? "line-through" : ""}`}>{el.title}</span>
                            <button
                                type="button"
                                onClick={() => {
                                    deleteTodos(idx)
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
