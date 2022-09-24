import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import RoutingMachine from "./RoutineMachine";
import { latLngBounds } from "leaflet";

let arrCoordinates = [];
function MyComponent(props) {
  const map = useMap();
  console.log("map center:", map.getCenter());
  map.flyTo([props.lat, props.long], 13, {
    animate: false,
  });
  if (props.source) {
    arrCoordinates = [
      [props.source[0], props.source[1]],
      [props.destination[0], props.destination[1]],
    ];
    map.flyToBounds(
      [
        [props.source[0], props.source[1]],
        [props.destination[0], props.destination[1]],
      ],
      {
        animate: false,
      }
    );
  }
  return null;
}
function MultipleMarkers() {
  return arrCoordinates.map((coordinata, index) => {
    return <Marker key={index} position={coordinata}></Marker>;
  });
}
export default function Map(props) {
  console.log("here", props.source);
  return (
    <MapContainer
      style={{ height: "200px", width: "500px" }}
      center={[props.lat, props.long]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <MyComponent
        lat={props.lat}
        long={props.long}
        source={props.source}
        destination={props.destination}
      />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.lat, props.long]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MultipleMarkers />
      {props.source && (
        <Polyline
          pathOptions={{ color: "red" }}
          positions={[
            [props.source[0], props.source[1]],
            [props.destination[0], props.destination[1]],
          ]}
        />
      )}
    </MapContainer>
  );
}
