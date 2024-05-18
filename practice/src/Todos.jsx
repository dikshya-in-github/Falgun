import { useState } from "react"

export default function Todos() {
    let todos = [
        {
            title: "Html",
            status: true,
        },
        {
            title: "Css",
            status: true,
        },
        {
            title: "Javascript",
            status: false,
        },
    ]
    const [todosList, setTodosList] = useState([...todos])
    const [newTodos, setNewTodos] = useState("")

    function submit(event) {
        event.preventDefault()
        setTodosList([...todosList, { title: newTodos, status: true }])
    }

    function handleChange(event) {
        setNewTodos(event.target.value)
    }

    function toggleChange(idx) {
        let temp = [...todosList]
        temp[idx].status = !temp[idx].status
        setTodosList(temp)
    }

    function deleteTodos(idx) {
        /* const deleteTodos = todosList.filter((el,i)=>{
            if(idx == i){
                return false
            }else{
                return true
            }
        })
        setTodosList(deleteTodos) */
        let temp = [...todosList]
        temp.splice(idx, 1)
        setTodosList(temp)
    }

    return (
        <>
            <h2>Todos List</h2>

            <form onSubmit={submit}>
                <input required type="text" onChange={handleChange} />
                <button>Add</button>
            </form>
            <ul>
                {todosList.map((el, idx) => {
                    return (
                        <li key={idx}>
                            <input
                                type="checkbox"
                                checked={el.status}
                                onChange={() => {
                                    toggleChange(idx)
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
