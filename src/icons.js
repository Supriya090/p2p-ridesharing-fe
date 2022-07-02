import L from "leaflet";
import redicondesign from "./assets/marker-icon-2x-red.png";
import blueicondesign from "./assets/marker-icon-2x-blue.png";
import shadow from "./assets/marker-shadow.png";

export var blueIcon = new L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: blueicondesign,
  shadowUrl: shadow
});

export var redIcon = new L.Icon({
	iconUrl: redicondesign,
	shadowUrl: shadow,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});