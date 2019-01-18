import React, { Component } from 'react';
import { Map, Marker, TileLayer, ZoomControl, Tooltip, LayersControl, LayerGroup } from 'react-leaflet'
import { locationIcon } from '../components/CustomIcons';
import data from '../fakeData';
import { startCase, toLower } from 'lodash'
import ControlPanel from '../components/ControlPanel';

class LeafletMap extends Component {
    constructor() {
      super()
      this.state = {
        center: [5, 15],
        lat: 3.65,
        lng: 19.15,
        zoom: 4.5,
        maxBounds: [[50, -30], [-45, 100]]
      }
    }

    render() {

      const types = [...new Set(data.map(loc => loc.type))];

      const group = types.map(type =>
        data.filter(loc => loc.type === type)
        .map(({id, lat, lng, name}) =>
          <LayersControl.Overlay name={startCase(toLower(type))}>
            <LayerGroup>
            <Marker key={id} position={[lat, lng]} icon=
              {locationIcon}>
              <Tooltip permanent direction="bottom" opacity={.6}>
                  {name}
              </Tooltip>
          </Marker>
            </LayerGroup>
          </LayersControl.Overlay>
          ));

      return (
        <>
        <ControlPanel />
        <Map
        zoomControl={false}
        center={this.state.center}
        zoom={this.state.zoom}
        maxBounds={this.state.maxBounds}
        maxZoom={10}
        >
          <LayersControl>
            <TileLayer
              url='https://cartocdn-gusc.global.ssl.fastly.net//ramirocartodb/api/v1/map/named/tpl_756aec63_3adb_48b6_9d14_331c6cbc47cf/all/{z}/{x}/{y}.png'
            />
            <ZoomControl position="topright" />

           {group}
          </LayersControl>
        </Map>
        </>
      );
    }
  }


  export default LeafletMap;