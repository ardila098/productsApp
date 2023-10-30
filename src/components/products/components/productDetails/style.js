import { Button, Select } from "antd";
import styled from "styled-components";

const ContentDetailsProduct = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 200px;
  justify-content: center;
  gap: 40px;
  font-family: "Montserrat", sans-serif;
  flex-direction: row;
  flex-wrap: wrap;
  div {
    display: flex;
  }
`;

const ContentSliderDetails = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`;

const ContentInitialImg = styled.div`
  display: flex;
  width: 350px;
  height: 450px;
  border-radius: 3px;

  img {
    border-radius: 3px;
    width: 350px;
    height: 450px;
  }
`;

const ContentImgsPrev = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const RowImgPrev = styled.div`
  display: flex;
  column-gap: 20px;
  width: 100px;
  height: 100px;
  border-radius: 3px;

  img {
    border-radius: 3px;

    width: 100px;
    cursor: pointer;
  }
`;

const ContentEspecificationProduct = styled.div`
  display: flex;
  width: 450px;
  height: 450px;
  flex-direction: column;
  .styleContenDetails {
    margin-top: 20px;
    flex-direction: column;
  }
`;

const NameDetails = styled.span`
  margin-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`;

const PriceDetails = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
`;

const ButtonCustom = styled(Button)`
  width: 200px;
  min-height: 50px;
  color: white;
  background-color: black;
`;

const ContentFirstDetails = styled.div``;

const TitleDetails = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const SelectSize = styled(Select)`
  color: black;
  font-family: "Montserrat", sans-serif;
`;

const ContentDetails = styled.div`
  display: flex;
  margin: auto;
  width: 65%;
`;
const ContentSizes = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  div {
    display: flex;
    width: 100%;
    .ant-form-item-row {
      display: flex !important;
      flex-direction: row;
    }
  }
`;

export {
  ContentDetailsProduct,
  ContentSliderDetails,
  ContentInitialImg,
  ContentImgsPrev,
  RowImgPrev,
  ContentEspecificationProduct,
  NameDetails,
  PriceDetails,
  ButtonCustom,
  ContentFirstDetails,
  TitleDetails,
  SelectSize,
  ContentDetails,
  ContentSizes,
};
