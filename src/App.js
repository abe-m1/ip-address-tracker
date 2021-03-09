import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Header from './components/Header';
import L from 'leaflet';

function App() {
  const [coords, setCoords] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  let mapRef = React.useRef(null);

  useEffect(() => {
    let startingCoordinates = L.latLng(34.0522, -118.2437);

    let map = L.map(
      'map-container',
      {
        center: startingCoordinates,
        zoom: 13,
      },
      []
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    mapRef.current = map;
  }, []);

  useEffect(async () => {
    let results = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=at_bjYUbsHotYNNF7gAMlWD02nZdV8uy&ipAddress=${searchTerm}`
    );
    console.log('in app', results);

    let newCoords = L.latLng(
      results.data.location.lat,
      results.data.location.lng
    );
    setCoords(results.data);
    mapRef.current.panTo(newCoords);
  }, [searchTerm]);

  const submitSearch = async (data) => {
    setSearchTerm(data);
    // let results = await axios.get(
    //   `https://geo.ipify.org/api/v1?apiKey=at_bjYUbsHotYNNF7gAMlWD02nZdV8uy&ipAddress=${data}`
    // );
    // console.log('in app', results);

    // L.latLng(results.data.location.lat, results.data.location.lng);
  };
  return (
    <div className="App">
      <Header submitSearch={submitSearch} />
      <Search searchResults={coords} />
      <div id="map-container"></div>
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
        . Coded by <a href="#">Abe Menashy</a>.
      </div>
    </div>
  );
}

export default App;
