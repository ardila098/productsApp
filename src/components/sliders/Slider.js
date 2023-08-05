import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const Slider = () => {
  const images = [
    {
      url: "https://res.cloudinary.com/doe7vtjfk/image/upload/v1686832823/kiran-ck-cDrIiiptFqE-unsplash_hd0hld.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=384&q=80",
    },
  ];

  return (
    <div style={{ width: "100%", height: "550px" }}>
      <SimpleImageSlider
        width="100%"
        height={550}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Slider;
