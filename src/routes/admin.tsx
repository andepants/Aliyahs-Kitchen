// @ts-nocheck
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
      <p className="underline">Enter NEW Menu Item:</p>
      <input className="bg-gray-200 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:shadow-outline-blue-500 m-1" placeholder="Name..." onChange={(event) => {setNewName(event.target.value)}}/><br/>
      <input className="bg-gray-200 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:shadow-outline-blue-500 m-1" type="number" placeholder="Price..." onChange={(event) => {setNewPrice(event.target.value)}}/><br/>
      <input className="bg-gray-200 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:shadow-outline-blue-500 m-1" placeholder="Type(burrito/place/tacos)..." onChange={(event) => {setNewType(event.target.value)}}/><br/>
      <input className="bg-gray-200 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:shadow-outline-blue-500 m-1" placeholder="description..." onChange={(event) => {setNewDescription(event.target.value)}}/><br/>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-.5 px-2 rounded-full" onClick={() => createMenuItem()}>Add Menu Item</button>
      <h3 className="text-2xl font-medium leading-normal text-left uppercase tracking-wide block mb-1 mt-1">
        Plates
      </h3>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>An error occurred, please try again later</p>}
      {data && data.filter((item) => {
        return item.type === "plate";
      }).map((item) => {
        return (
          <div>
            <div>
              <h4 className="font-bold text-left">{item.name}</h4>
              <p className="text-xs md:text-sm text-gray-600 text-left">{item.description}
                <small className="ml-auto italic text-sm">  ${item.price}</small>
              </p>
              <br/>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-.5 px-2 rounded-full" onClick={() => {deleteMenuItem(item.id)}}>Delete Menu Item</button>
              <br/>
              <br/>
            </div>
          </div>
        );
      })}
      <div className="border-t-2 my-6"></div>
      <h3 className="text-2xl font-medium leading-normal text-left uppercase tracking-wide block mb-1 mt-1">
        Tacos
      </h3>
      {data && data.filter((item) => {
        return item.type === "taco";
      }).map((item) => {
        return (
          <div>
            <div>
              <h4 className="font-bold text-left">{item.name}</h4>
              <p className="text-xs md:text-sm text-gray-600 text-left">{item.description}
                <small className="ml-auto italic text-sm">  ${item.price}</small>
              </p>
              <br/>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-.5 px-2 rounded-full" onClick={() => {deleteMenuItem(item.id)}}>Delete Menu Item</button>
              <br/>
              <br/>
            </div>
          </div>
        );
      })}
      <div className="border-t-2 my-6"></div>
      <h3 className="text-2xl font-medium leading-normal text-left uppercase tracking-wide block mb-1 mt-1">
        Burritos
      </h3>
      {data && data.filter((item) => {
        return item.type === "burrito";
      }).map((item) => {
        return (
          <div>
            <div>
              <h4 className="font-bold text-left">{item.name}</h4>
              <p className="text-xs md:text-sm text-gray-600 text-left">{item.description}
                <small className="ml-auto italic text-sm">  ${item.price}</small>
              </p>
              <br/>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-.5 px-2 rounded-full" onClick={() => {deleteMenuItem(item.id)}}>Delete Menu Item</button>
              <br/>
              <br/>
            </div>
          </div>
        );
      })}
      <div className="border-t-2 my-6"></div>
      <h3 className="text-2xl font-medium leading-normal text-left uppercase tracking-wide block mb-1 mt-1">
        Quesadillas
      </h3>
      <div className="border-t-2 my-6"></div>
      <h3 className="text-2xl font-medium leading-normal text-left uppercase tracking-wide block mb-1 mt-1">
        Asada
      </h3>
      <div className="border-t-2 my-6"></div>
      <h3 className="text-2xl font-medium leading-normal text-left uppercase tracking-wide block mb-1 mt-1">
        Tortas
      </h3>
      <div className="border-t-2 my-6"></div>
      <h3 className="text-2xl font-medium leading-normal text-left uppercase tracking-wide block mb-1 mt-1">
        Tostada
      </h3>
      <div className="border-t-2 my-6"></div>
      <h3 className="text-2xl font-medium leading-normal text-left uppercase tracking-wide block mb-1 mt-1">
        Weekend Specials
      </h3>
      <div className="border-t-2 my-6"></div>
      <h3 className="text-2xl font-medium leading-normal text-left uppercase tracking-wide block mb-1 mt-1">
        à la carte
      </h3>
    </div>
  );
}