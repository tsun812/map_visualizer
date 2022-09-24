import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";

import './map.css';
function MyComponent(props) {
  const map = useMap();
  console.log("map center:", map.getCenter());
  map.flyTo([props.lat, props.long], 13, {
    animate: false,
  });
  return null;
}
export default function Map(props) {
  return (
    <div className="mapWrapper">
      <MapContainer
      className="mapContainer"
      center={[props.lat, props.long]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <MyComponent lat={props.lat} long={props.long} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.lat, props.long]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}
