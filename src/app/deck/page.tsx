import React from "react";

const Deck: React.FC = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <iframe
        src="/path-to-your-pdf.pdf"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
      />
    </div>
  );
};

export default Deck;
