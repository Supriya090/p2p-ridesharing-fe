import { useEffect } from "react";
import { Marker, Popup, useMap, useMapEvents} from "react-leaflet";
import './styles/location.css';
import '../../node_modules/leaflet/dist/leaflet.css';
import { redIcon, blueIcon} from '../constants/icons'
import useStore from "../hooks/useStore";

const LocationMarker = () => {
    const {state, dispatch} = useStore();
    const map = useMap();

    useMapEvents({
        click(e) {
            dispatch({
              type: 'SET_DROP_LOCATION',
              payload: e.latlng
            })
        }
    })

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        dispatch({
          type: 'SET_PICKUP_LOCATION',
          payload: e.latlng
        })
        map.flyTo(e.latlng, map.getZoom());
      });
    }, [map]);

    return (
    <>
    {state?.pickUp ? (
      <Marker position={state?.pickUp} icon={blueIcon}>
        <Popup>You are here: <br />Latitude: {state?.pickUp.lat}<br />Longitude: {state?.pickUp.lng}</Popup>
      </Marker>
    ): null}
    {state?.dropOff ? (
      <Marker position={state?.dropOff} icon={redIcon}>
        <Popup>Destination: <br />Latitude: {state?.dropOff.lat}<br />Longitude: {state?.dropOff.lng}</Popup>
      </Marker>
      ): null}
    </>
    )}

    export default LocationMarker;