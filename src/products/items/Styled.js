import { Button } from "antd";
import styled from "styled-components";

const ContentProductsList = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  gap: 40px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const CardProduct = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  width: 200px;
  flex-direction: column;
  flex-wrap: nowrap;
  border-radius: 15px;
  gap: 5px;
  img {
    width: 180px;
    height: 180px;
    object-fit: cover;
  }
`;

const ContentTitle = styled.div`
  height: 100px;
  height: 50px;
  
`;

const TitleProduct = styled.p`
  font-size: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: black;
`;

const ContentImg = styled.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    border: 1px transparent;
    height: 100%;
    border-radius: 15px;
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
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  align-items: left;
  color: #636665;
`;

const ButtonLikeCard = styled(Button)`
  border: none;
`;

const ButtonAddCard = styled(Button)`
  border: none;
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
  ButtonAddCard,
};
