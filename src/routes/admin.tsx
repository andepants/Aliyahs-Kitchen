import { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import firebase from "firebase/app";
import "firebase/firestore";


export default function Admin() {
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newType, setNewType] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const menuCollectionRef = firebase.firestore().collection("menu");
  const { data, status } = useQuery('menu', () => firebase
    .firestore()
    .collection("menu")
    .get()
    .then(snapshot => snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))));

  const createMenuItem = async () => {
    await menuCollectionRef.add({ name: newName, price: newPrice, type: newType, description: newDescription });
  }

  const deleteMenuItem = async (id) => {
    const menutItemDoc = menuCollectionRef.doc(id);
    await menutItemDoc.delete();
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  }

  return (
    <div id="admin">
      <h2>Admin Page</h2>
      <input placeholder="Name..." onChange={(event) => {setNewName(event.target.value)}}/>
      <input type="number" placeholder="Price..." onChange={(event) => {setNewPrice(event.target.value)}}/>
      <input placeholder="Type(burrito/place/tacos)..." onChange={(event) => {setNewType(event.target.value)}}/>
      <input placeholder="description..." onChange={(event) => {setNewDescription(event.target.value)}}/>
      <button onClick={() => createMenuItem()}>Add Menu Item</button>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>An error occurred, please try again later</p>}
      {data && data.map((item) => {
        return (
          <div>
            <h2 className="font-bold">{item.name}</h2>
            <p>Type: {item.type}</p>
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <button onClick={() => {deleteMenuItem(item.id)}}>Delete Menu Item</button>
            <br/>
            <br/>
          </div>
        );
      })}
    </div>
  );
}