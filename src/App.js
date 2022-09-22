import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar";
import LatLonData from "./latLonData";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Map from "./map";
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SearchBar />
=======
      <SearchBar />
      <Map />
>>>>>>> 81b5f9b477eba67ada1e5cf5ab7ee94cc325cc34
    </div>
  );
}

export default App;
