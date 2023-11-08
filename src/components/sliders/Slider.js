import React from "react";
import { ContentSlider } from "./style";

const Slider = () => {
  const video = {
    url: "https://res.cloudinary.com/doe7vtjfk/video/upload/v1696721762/B1B4806E-9DCC-45F6-AA44-15D8F02E04D5_b2za6u.mov",
  };

  return (
    <ContentSlider>
      <video
        src={video.url}
        style={{ objectFit: "cover" }}
        autoPlay
        muted
        loop
      />
    </ContentSlider>
  );
};

export default Slider;
