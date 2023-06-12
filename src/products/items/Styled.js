import { Button } from "antd";
import styled from "styled-components";

const ContentProductsList = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  gap: 30px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const CardProduct = styled.div`
margin-top: 20px;
margin-bottom: 20px;
  display: flex;
  width: 250px;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  border-radius: 15px;

  img {
    width: 250px;
    height: 300px;
    object-fit: cover;
  }
`;

const ContentTitle = styled.div`
  height: 100px;
  height: 50px;
`;

const TitleProduct = styled.p`
  font-size: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;`;

const ContentImg = styled.div`
  width: 100%;
  height: 250px;

  img {
    width: 100%;
    border: 1px transparent;
    height: 100%;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -10px 10px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -9px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 5px 8px,
      rgba(0, 0, 0, 0.09) 0px 2px 6px;
    object-fit: cover;
  }
`;

const ContentCategory = styled.div``;

const ContentDescription = styled.div`
  height: 40px;
 
  max-width: 200px;
`;

const DescriptionCard = styled.p`
  font-size: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ContentPrice = styled.div``;

const PriceText = styled.span`
  font-size: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonLikeCard = styled(Button)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
 
`;

const ButtonAddCard = styled(Button)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
 
`;


export {
  CardProduct,
  TitleProduct,
  ContentImg,
  ContentCategory,
  ContentProductsList,
  ContentDescription,
  DescriptionCard,
  ContentTitle,
  ContentPrice,
  PriceText,
  ButtonLikeCard,
  ButtonAddCard
};
