import React from 'react'
import axios from 'axios'
import firebase from 'firebase/app';
import 'firebase/functions';


//import firebase from 'firebase-functions';

export default function Menu() {

  const baseUrl = 'https://us-central1-aliyahs-kitchen.cloudfunctions.net/randomNumber';
  //const baseUrl = 'http://127.0.0.1:5001/aliyahs-kitchen/us-central1/readAllMenuItems';

  const readMenu = () => {
    // axios.get(baseUrl)
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    console.log('hi');
    const sayHello = firebase.functions().httpsCallable('sayHello');
    sayHello().then((result) => {
      console.log(result.data);
    })
  }

  return (
    <div>
      <h2>Menu</h2>
      <button onClick={() => readMenu()}>read all Menu Data from my firebase</button>
    </div>
  );
}

