import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import type { Map as LeafletMap } from "leaflet";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { centerPositionSelector } from "@states/selectors";
import { useSelectedCoordinates } from "@/shared/hooks";
import "./maps.scss";

export function Maps() {
  const mapRef = useRef<LeafletMap>(null);
  const position = useSelector(centerPositionSelector);
  const geometryList = useSelectedCoordinates();

  useEffect(() => {
    if (position) mapRef.current?.setView(position, 15);
  }, [position]);

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
