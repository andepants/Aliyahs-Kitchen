// @ts-nocheck
import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import './App.css'
import { db } from '../firebase-config';
import firebase from "firebase/app";
import "firebase/firestore";

function App() {
  const menuCollectionRef = firebase.firestore().collection("menu");

  const getMenu = async () => {
    try {
      const querySnapshot = await menuCollectionRef.get();
      const newMenu = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
      console.log(newMenu)
      return newMenu;
    } catch (error) {
      throw error;
    }
  }

  const { data, status, error } = useQuery('menu', getMenu)

  return (
    <div className="App relative">
      <h1 className="relative top-0 text-orange-500 m-4 leading-10">Aliyah's Kitchen</h1>
      <Link to="/admin">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-.5 px-2 mx-1">Go to admin</button>
      </Link>
      <Link to="/home">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-.5 px-2 mx-1">Go to home</button>
      </Link>
      <Link to="/menu">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-.5 px-2 mx-1">Go to menu</button>
      </Link>
      <Outlet />
    </div>
  )
}

export default App
