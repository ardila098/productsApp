import { Carousel } from "antd";
import styled from "styled-components";

const ContentStyle = styled.div`
  height: "160px";
  color: "#fff";
  line-height: "160px";
  text-align: "center";
  background: "#364d79";
`;

const ContentImgCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  img {
    width: 100%;
    height: 500px;
    object-fit: contain;
  }
`;

const ContentCarousel = styled(Carousel)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export { ContentCarousel, ContentImgCarousel, ContentStyle };
