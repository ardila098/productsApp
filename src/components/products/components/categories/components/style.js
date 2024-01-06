import { Col, Row } from "antd";
import styled from "styled-components";

const ContentItemsSlider = styled.div`
  margin-top: 100px;
  margin-bottom: 150px;
  display: flex;
  justify-content: center;
  min-height: 300px;
  min-width: 768px;
  width: 100%;
  justify-items: center;
  align-content: center;
`;

const ContentItem = styled.div`
  display: flex;
`;

const ContentImgItem = styled.div`
  display: flex;
  background-color: red;
  img {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border: 5px;
    height: 400px;
    transition: transform 0.3s ease;
    width: 100%;
  }
`;

export { ContentItemsSlider, ContentItem, ContentImgItem };
