import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";

const Location = () => {
  return (
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  )
}

export default Location;