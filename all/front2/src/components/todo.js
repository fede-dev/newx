
import { useState } from "react"
import styled from "styled-components"

const TodoText = styled.h2`
    background-color: yellow;
    font-size: 2em;
    text-decoration: ${props => props.finished ? "line-through" : "none"};
    &:hover {
        cursor: pointer;
        font-size: 2.2em;
    }
`;

const TodoList = () => {
    const [textTodo, setTextTodo] = useState("")

    const [toDoList, setToDoList] = useState([{
        id: "1",
        nombre: "Pasear al perro",
        finished: true
    },
    {
        id: "2",
        nombre: "Sacar la basura",
        finished: false
    }
    ])

    const changeFinish = (index) => {
        const element = toDoList[index]
        element.finished = !element.finished

        setToDoList([...toDoList])
    }

    const addTodoElement = () => {

        if(!textTodo){
            return;
        }

        const ultimo = toDoList[toDoList.length - 1]
        toDoList.push({
            id: (parseInt(ultimo.id) + 1).toString(),
            nombre: textTodo,
            finished: false
        })

        setTextTodo("")

        setToDoList([...toDoList])
    }

    return (

        <div>
            <input value={textTodo} onChange={e => setTextTodo(e.target.value)} />
            <button onClick={() => addTodoElement()}>Add todo element</button>
            {toDoList.map((item, index) => {
                return (
                    <div key={item.id}>
                        <TodoText onClick={() => changeFinish(index)} finished={item.finished}>{item.nombre} {item.id}</TodoText>
                    </div>
                )
            })}

        </div>)
}


export default TodoList;




{/* toDoList => 
           [
               {
                    id: "1",
                    nombre: "Pasear al perro",
                    active: true,
                    horas : ["18:00","19:00","20:00"]
                },
                {
                    id: "2",
                    nombre: "Sacar la basura",
                    active: false
                    horas : []
                },
                    {
                    nombre: "Sacar la basura",
                    active: false
                    horas : []
                }
            ]


        toDoList.map(r => {
            let horasTexto = r.horas.reduce((acc,actual) => acc + " " +  actual) // => "18:00 19:00 20:00"
            return {
                id:  r.id,
                nombre: r.nombre,
                horas : horasTexto
            }
        }) => [{id :"1",nombre: "Pasear al perro", horas : "18:00 19:00 20:00" }]

        
        */}