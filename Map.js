import React, { useEffect, useRef } from "react";

function Map(props) {
  const prevMarkersRef = useRef([]);

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: props.center,
      zoom: props.zoom
    });

    clearMarkers(prevMarkersRef.current); //clear prev markers

    window.google.maps.event.addListener(map, "click", e => {
      const m = createMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() }, map);
      clearMarkers(prevMarkersRef.current); //clear prev markers
      prevMarkersRef.current.push(m);
    });

    for (let loc of props.locations) {
      const m = createMarker({ lat: loc.lat, lng: loc.lng }, map);
      prevMarkersRef.current.push(m);
    }
  });

  function createMarker(position, map) {
    return new window.google.maps.Marker({
      position: position,
      map: map
    });
  }

  function clearMarkers(markers) {
    for (let m of markers) {
      m.setMap(null);
    }
  }

  return (
    <div>
      <div id="map"></div>
    </div>
  );
}

export default Map;
