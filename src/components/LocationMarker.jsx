import { useState, useEffect } from "react";
import { Marker, Popup, MapContainer,TileLayer, useMap, useMapEvents} from "react-leaflet";
import './styles/location.css';
import '../../node_modules/leaflet/dist/leaflet.css';
import { redIcon, blueIcon} from '../icons'

const LocationMarker = () => {
    const [position, setPosition] = useState(null)
    const [destination, setDestination] = useState(null)
    const map = useMap();

    useMapEvents({
        click(e) {
            setDestination(e.latlng)
        }
    })

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, [map]);

    return (
    <>
    {position === null ? null : (
      <Marker position={position} icon={blueIcon}>
        <Popup>You are here: <br />Latitude: {position.lat}<br />Longitude: {position.lng}</Popup>
      </Marker>
    )}
    {destination === null ? null : (
      <Marker position={destination} icon={redIcon}>
        <Popup>Destination: <br />Latitude: {destination.lat}<br />Longitude: {destination.lng}</Popup>
      </Marker>
      )}
    </>
    )}

    export default LocationMarker;