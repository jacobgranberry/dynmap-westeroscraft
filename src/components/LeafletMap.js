import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, ZoomControl, Tooltip } from 'react-leaflet'
import { locationIcon } from '../components/CustomIcons';

class LeafletMap extends Component {
    constructor() {
      super()
      this.state = {
        lat: 5,
        lng: 20,
        zoom: 6,
        maxBounds: [[50, -30], [-45, 100]]
      }
    }

    render() {
      const position = [this.state.lat, this.state.lng];
      return (
        <Map
          zoomControl={false}
          center={position}
          zoom={this.state.zoom}
          maxBounds={this.state.maxBounds}
          maxZoom={10}
        >
            <TileLayer
              url='https://cartocdn-gusc.global.ssl.fastly.net//ramirocartodb/api/v1/map/named/tpl_756aec63_3adb_48b6_9d14_331c6cbc47cf/all/{z}/{x}/{y}.png'
            />
          <ZoomControl position="topright" />
            <Marker position={position} icon={locationIcon}>
              <Tooltip permanent direction="bottom" opacity={.7}>King's Landing</Tooltip>
            </Marker>
        </Map>
      );
    }
  }


  export default LeafletMap;