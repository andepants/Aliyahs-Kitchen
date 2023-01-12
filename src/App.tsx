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
      return querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
    } catch (error) {
      throw error;
    }
  }

  const { data, status, error } = useQuery('menu', getMenu)

  return (
    <div className="App relative">
      <h1 className="relative top-0 text-orange-500 m-4 leading-10">Aliyah's Kitchen</h1>
      <Link to="/admin">
            <button>Go to admin</button>
        </Link>
        <Link to="/home">
            <button>Go to home</button>
        </Link>
        <Link to="/menu">
            <button>Go to menu</button>
        </Link>
      <Outlet />
    </div>
  )
}

export default App
