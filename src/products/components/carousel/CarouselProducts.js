import React from "react";
import { Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { ContentImgCarousel, ContentCarousel } from "./styled";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CarouselProducts = () => {
  return (
    <>
      <ContentCarousel autoplay arrows {...settings}>
        <ContentImgCarousel></ContentImgCarousel>
      </ContentCarousel>
    </>
  );
};

export default CarouselProducts;
