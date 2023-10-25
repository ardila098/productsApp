import styled from "styled-components";

const ContentDetailsProduct = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 200px;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`;

const ContentSliderDetails = styled.div`
  display: flex;
  gap: 20px;
`;

const ContentInitialImg = styled.div`
  display: flex;
  width: 450px;
  height: 450px;
  img {
    width: 450px;
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
  img {
    width: 100px;
  }
`;

const ContentEspecificationProduct = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameDetails = styled.span`
  font-family: "Montserrat", sans-serif;
`;

const PriceDetails = styled.span`
  font-family: "Montserrat", sans-serif;
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
};
