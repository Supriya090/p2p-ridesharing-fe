import { useState } from "react";
import { Marker, Popup, MapContainer,TileLayer, useMapEvents} from "react-leaflet";
import './styles/location.css';
import '../../node_modules/leaflet/dist/leaflet.css';

const Location = () => {
const LocationMarker = () => {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
  
  return (
    // <div style={{height: '500px', weidth: '700px', justifyContent: 'center', alignItem: 'center'}}>
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
    // </div>
  )
}

export default Location;