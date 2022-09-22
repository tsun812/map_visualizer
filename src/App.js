import logo from "./logo.svg";
import "./App.css";
import LatLonData from "./latLonData";
import Map from "./map";
import { map } from "leaflet";
import { useMap } from "react-leaflet/hooks";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
