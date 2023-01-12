// @ts-nocheck
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import { db } from '../firebase-config';
import firebase from "firebase/app";
import "firebase/firestore";

function App() {

  const [menu, setMenu] = useState([]);
  const menuCollectionRef = firebase.firestore().collection("menu");

  useEffect(() => {
    const getMenu = async () => {
      try {
          const querySnapshot = await menuCollectionRef.get();
          setMenu(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
          console.log(querySnapshot);
      } catch (error) {
          console.log(error);
      }
    }

    getMenu();
  }, []);

  return (
    <div className="App relative">
      <h1 className="relative top-0 text-orange-500 m-4 leading-10">Aliyah's Kitchen</h1>
      {menu.map((item) => {
        return (
          <div>
            <div>Item</div>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </div>
        );
      })}
      <div>
        Hi, Paula! Just started working on the website! Just working on functionality, and then later work on making it look better!
      </div>
      <div>
        -Andrew
      </div>
      <Outlet />
    </div>
  )
}

export default App
