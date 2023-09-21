import React from "react";

export const MoodifyShowcase = () => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <video autoPlay loop muted playsInline width="100%" height="100%">
      <source src="/videos/moodify.mp4" type="video/mp4" />
    </video>
  </div>
);
