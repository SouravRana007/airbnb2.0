// import { useState } from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import { getCenter } from "geolib";
// function Maps({ searchResults }) {
//   const coordinates = searchResults.map((result) => ({
//     longitude: result.long,
//     latitude: result.lat,
//   }));
//   const center = getCenter(coordinates);
//   const [viewport, setViewPort] = useState({
//     width: "100%",
//     height: "100%",
//     latitude: center.latitude,
//     longitude: center.longitude,
//     zoom: 11,
//   });
//   //   console.log(center);

//   return (
//     <ReactMapGL
//       mapStyle="mapbox://styles/sourav749606/clxsn4s0o00pl01r23bwyb0dt"
//       mapboxAccessToken={process.env.mapbox_key}
//       {...viewport}
//       onViewportChange={(nextViewport) => setViewPort(nextViewport)}
//     >
//       {searchResults.map((result) => (
//         <div key={result.long}>
//           <Marker
//             longitude={result.long}
//             latitude={result.lat}
//             offsetLeft={-20}
//             offsetTop={-10}
//           >
//             <p>🏢</p>
//           </Marker>
//         </div>
//       ))}
//     </ReactMapGL>
//   );
// }

// export default Maps;
