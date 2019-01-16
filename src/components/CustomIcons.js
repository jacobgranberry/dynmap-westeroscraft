import L from 'leaflet'

  export const locationIcon = new L.Icon({
    iconUrl: require('../assets/locationIcon.svg'),
    iconRetinaUrl: require('../assets/locationIcon.svg'),
    iconAnchor: [13, 27],
    popupAnchor: null,
    iconSize: [25, 25],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
  })