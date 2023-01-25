// @ts-nocheck
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
      <h2 className="text-3xl md:text-4xl font-medium font-bold text-center text-orange-600">Menu</h2>
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







