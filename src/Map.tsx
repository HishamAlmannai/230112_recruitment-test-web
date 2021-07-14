import "mapbox-gl/dist/mapbox-gl.css";

import { Map as _ReactMapboxGl } from "react-mapbox-gl";

const GERMANY_BOUNDS: [[number, number], [number, number]] = [
  [3, 40],
  [16, 56]
];

const ReactMapboxGl = _ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZWNsZXZlciIsImEiOiJja3IzM3B3b24yMHNsMnBueGNya3I4eXExIn0.qNBd6dRRZLTTxKSJ0PUazg"
});

const Map = ({
  children
}: {
  children?: JSX.Element | JSX.Element[] | Array<JSX.Element | undefined>;
}) => (
  <ReactMapboxGl
    style="mapbox://styles/mapbox/streets-v11"
    fitBounds={GERMANY_BOUNDS}
    containerStyle={{ width: "100%", height: "100%" }}
  >
    {children}
  </ReactMapboxGl>
);

export default Map;
