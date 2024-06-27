import React from "react";

const Pitch: React.FC = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <iframe
        style={{ minHeight: "100vh" }}
        src="/img/pitch.pdf"
        frameBorder="0"
        height="100%"
        width="100%"
      ></iframe>
    </div>
  );
};

export default Pitch;
