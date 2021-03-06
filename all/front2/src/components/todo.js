import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios'

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  width: 20%;
`;

const TodoText = styled.h2`
  background-color: yellow;
  font-size: 2em;
  text-decoration: ${(props) => (props.finished ? "line-through" : "none")};
  &:hover {
    cursor: pointer;
    font-size: 2.2em;
  }
`;

const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const TodoList = () => {
  const params = useParams();
  const [textTodo, setTextTodo] = useState("");
  const [filterTodoList, setFilterTodoList] = useState([]);
  const [toDoList, setToDoList] = useState([]);

  console.log(textTodo)
  const changeFinish = (index) => {
    //[1,{finished : true}},3]
    // 0 1 2
    const element = toDoList[index];
    element.finished = !element.finished;
    setToDoList([...toDoList]);
  };

  const addTodoElement = async(text) => {
    const response = await axios.post("http://localhost:4000/api/todo/" + {
      id: text.id,
      nombre: text.nombre,
      finished: text.finished
    })
  
    // if (!textTodo) {
    //   return;
    // }
    // const ultimo = toDoList[toDoList.length - 1];
    // const newid = parseInt(ultimo ? ultimo.id : 0);
    // toDoList.push({
    //   id: (newid + 1).toString(),
    //   nombre: textTodo,
    //   finished: false,
    // });
    setTextTodo("");
    setToDoList([...response]);
  };

  const findElementsByName = () => {
    let newElements = [];
    for (let i = 0; i < toDoList.length; i++) {
      const element = toDoList[i];
      if (element.nombre.includes(textTodo)) {
        newElements.push(element);
      }
    }
    setFilterTodoList(newElements);
  };

 

  const handleDelete = async(id) => {
   const data = await axios.delete("http://localhost:4000/api/todo/" + params.id)
    // let newTodoList = [];
    // for (let i = 0; i < toDoList.length; i++) {
    //   const element = toDoList[i];
    //   if (element.id != id) {
    //     newTodoList.push(element);
    //   }
    // }
    setToDoList(data);
    setFilterTodoList([]);
  };

  const getAll = async()=>{
   const response = await axios.get("http://localhost:4000/api/todo/")
   //console.log(response.data)
   setToDoList([response.data])
  }

  return (
    <>
      <input value={textTodo} onChange={(e) => setTextTodo(e.target.value)} />
      <button onClick={() => addTodoElement()}>Add todo element</button>
      <button onClick={() => findElementsByName()}>Find todo element</button>
      {toDoList.map((item, index) => {
        return (
          <TodoContainer key={item.id}>
            <DeleteIcon
              src={"https://cdn-icons-png.flaticon.com/512/54/54324.png"}
              onClick={() => handleDelete(item.id)}
            />
            <TodoText
              onClick={() => changeFinish(index)}
              finished={item.finished}
            >
              {item.nombre} {item.id}
            </TodoText>
          </TodoContainer>
        );
      })}
      <h1>Elementos filtrados</h1>
      {filterTodoList.map((item, index) => {
        return (
          <TodoContainer key={item.id}>
            <TodoText finished={item.finished}>
              {item.nombre} {item.id}
            </TodoText>
          </TodoContainer>
        );
      })}
      <button onClick={()=>getAll()}>todo Array</button>
    </>
  );
};

export default TodoList;

{
  /* toDoList => 
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

        
        */
  /*
    let lista = [A,AB,D,AE,F]

    "AB".includes("A")
    [
    {
      id: "1",
      nombre: "Pasear al perro",
      finished: true,
    },
    {
      id: "2",
      nombre: "Sacar la basura",
      finished: false,
    },
  ]
    */
}
