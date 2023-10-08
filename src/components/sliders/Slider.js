import React from "react";

const Slider = () => {
  const video = {
    url: "https://res.cloudinary.com/doe7vtjfk/video/upload/v1696721762/B1B4806E-9DCC-45F6-AA44-15D8F02E04D5_b2za6u.mov",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "700px",
        marginBottom: "50px",
      }}
    >
      <video
        src={video.url}
        width="100%"
        height="100%"
        style={{ objectFit: "cover" }}
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default Slider;
