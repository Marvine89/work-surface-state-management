import "./maps.scss";
import type { Map as LeafletMap } from "leaflet";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { geometrySelector, centerPositionSelector } from "@states/selectors";

export function Maps() {
  const mapRef = useRef<LeafletMap>(null);
  const position = useSelector(centerPositionSelector);
  const geometryList = useSelector(geometrySelector);

  useEffect(() => {
    if (position) mapRef.current?.setView(position, 15);
  }, [position]);

  console.log(geometryList);

  return (
    <section className="map-block">
      <MapContainer
        className="map-block__map"
        center={[51.505, -0.09]}
        zoom={6}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {geometryList.map((geo, i) => (
          <Polygon key={i} positions={geo.coordinates} />
        ))}
      </MapContainer>
    </section>
  );
}
