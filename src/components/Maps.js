import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { getCenter } from "geolib";
function Maps({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(coordinates);
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  //   console.log(center);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/sourav749606/clxsn4s0o00pl01r23bwyb0dt"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    ></ReactMapGL>
  );
}

export default Maps;
