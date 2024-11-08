import { useEffect, useRef } from 'react';
import type { LatLngTuple, Map as LeafletMap } from 'leaflet';
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './maps.module.scss';
import { Coordinates } from '@/shared/interfaces';

interface MapsProps {
  position?: LatLngTuple;
  geometryList: Coordinates[][];
  zoom?: number;
}

export function Maps(props: MapsProps) {
  const mapRef = useRef<LeafletMap>(null);

  useEffect(() => {
    if (props.position) mapRef.current?.setView(props.position, 15);
  }, [props.position]);

  return (
    <MapContainer
      className={styles['map']}
      center={props.position || [51.505, -0.09]}
      zoom={props.zoom || 6}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {props.geometryList.map((geo, i) => (
        <Polygon key={i} positions={geo} />
      ))}
    </MapContainer>
  );
}
