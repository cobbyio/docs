import React from "react";
import Snowfall from "react-snowfall";

export default function Snowflakes() {
  return (
    <Snowfall
      color="white"
      snowflakeCount={50}
      speed={[0.5, 1.5]}
      wind={[-0.5, 1]}
      radius={[1, 4]}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    />
  );
}
