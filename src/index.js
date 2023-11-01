import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";

import { TaskCard } from "./Task";

import { Saludar } from "./Saludar";

import { Post } from "./Posts";

// Esto es el Dom Virtual de React
const root = ReactDOM.createRoot(document.getElementById("root"));

// const handleChange = (e) => {
//   console.log(e.target.value);
// }

const user = [
  {
    id: 1,
    name: "Ryan ray",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Joe",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Roddy",
    image: "https://robohash.org/roddy",
  },
];

function Mensaje() {
  const [mensaje, setMensaje] = useState('');

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)} />
      <button onClick={() => {
        alert('El mensaje es: ' + mensaje)
      }}>
        Save
      </button>
    </div>
  );
}

root.render(
  <>
    <h1>Counter: 0</h1>
    <button>Sumar</button>
    <hr/>
    <Mensaje />
    {/* {user.map((user, i) => {
      return(
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image}/>
        </div>
      )
    })} */}

    {/* <Post/> */}

    {/* <Button text="Hola mundo" name="Roddy"/>

  <input id="hola" onChange={handleChange} /> */}

    {/* <Saludar/> */}

    {/* <TaskCard ready={true}/>
  <TaskCard ready={false}/> */}

    {/* <Button text="Click Me" name="Usuario"/>
  <Button text="Pay"/>
  <Button text="Go To"/>
  <Button text={3000}/> */}

    {/* <Greeting title="Hola mundo" name="React" />
    <Product />
    <UserCard
      name="Roddy R. T. R."
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("alerta");
      }}
    /> */}
  </>
);
