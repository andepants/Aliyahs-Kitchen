import { useQuery } from 'react-query'
import firebase from 'firebase/app';
import 'firebase/functions';


//import firebase from 'firebase-functions';

export default function Menu() {

  const { data, status } = useQuery('menu', () => firebase
    .firestore()
    .collection("menu")
    .get()
    .then(snapshot => snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))));

  return (
    <div>
      <h2>Menu</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>An error occurred, please try again later</p>}
      {data && data.map((item) => {
        return (
          <div>
            <div>Item</div>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
}







