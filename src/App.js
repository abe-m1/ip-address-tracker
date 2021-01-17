import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Map from './components/Map';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Map />
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
