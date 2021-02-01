import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Map from './components/Map';
import Header from './components/Header';

function App() {
  const [coords, setCoords] = useState({});
  useEffect(() => {
    axios
      .get(
        'https://geo.ipify.org/api/v1?apiKey=at_bjYUbsHotYNNF7gAMlWD02nZdV8uy&ipAddress=8.8.8.8'
      )
      .then((res) => {
        console.log(res.data.location);
        // let { lat, lng } = res.data.location;
        setCoords(res.data.location);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Search />
      <Map coordinates={coords} />
      {/* 

Search for any IP address or domain

IP Address
Location
Timezone
  UTC <!-- add offset value dynamically using the API -->
ISP */}
      <div class="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
