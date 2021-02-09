import './App.css';
import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Mainboard from "./Mainboard";
import unsplash from "./api/unsplash";
import db from './firebase';


function App() {

  const [pins, setNewPins] = useState([]);
  

  const makeAPICall = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos",{
      params: {query: term},
    });
  };

  const onSearchSubmit = (term) => {
      let promises = [];
      let searchedPins= [];
      promises.push(makeAPICall(term).then((res) => {
        let results = res.data.results;
          results.map((pin) => {
            searchedPins.push(pin);
          });
      }));

    Promise.all(promises).then(() => {
      setNewPins(searchedPins);
    });    
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    db.collection("terms").onSnapshot((snapshot) => {
      let snapshotData = snapshot.docs;

      if(snapshotData.length >= 10) {
        snapshotData = snapshotData.slice(
          snapshotData.length - 5,
          snapshotData.length
        );
      }

      snapshotData.map((doc) =>{

        promises.push(
          makeAPICall(doc.data().term).then((res) => {
            let results = res.data.results;
            results.map((object) => {
            pinData.push(object)
          });

          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
        );
      });
      Promise.all(promises).then(() => {
        setNewPins(pinData);
      
      });
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className="app">
        <div className="app_header">
          <Header onSubmit={onSearchSubmit}/> 
        </div>

        <div className="app_body">
          <Mainboard pins={pins} />
        </div>
    </div>
  );
};

export default App;
