import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";

export default function Admin() {
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newType, setNewType] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const menuCollectionRef = firebase.firestore().collection("menu");

  const createMenuItem = async () => {
    await menuCollectionRef.add({ name: newName, price: newPrice, type: newType, description: newDescription });

  }

  return (
    <div id="admin">
      <input placeholder="Name..." onChange={(event) => {setNewName(event.target.value)}}/>
      <input type="number" placeholder="Price..." onChange={(event) => {setNewPrice(event.target.value)}}/>
      <input placeholder="Type(burrito/place/tacos)..." onChange={(event) => {setNewType(event.target.value)}}/>
      <input placeholder="description..." onChange={(event) => {setNewDescription(event.target.value)}}/>
      <button onClick={() => createMenuItem()}>Add Menu Item</button>
      <p>This is the admin page</p>
    </div>
  );
}