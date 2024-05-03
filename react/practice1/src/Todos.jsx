const todos = ["html", "css", "js"]

export default function Todos(){
    return (
        <>
            <h2>Todos</h2>
            {
                todos.map((el) => {
                    return <li>{el}</li>
                })
            }
        </>
    )
}