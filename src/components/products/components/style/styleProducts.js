import styled from "styled-components";

const ContentProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 80%;
  justify-items: end;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
  margin-top: 70px;
  .image-container {
    position: relative;
    overflow: hidden;
  }
`;

const ContentImgProduct = styled.div`
  display: flex;
  border-radius: 5px;
  img {
    width: 250px;
    height: 350px;
    transition: transform 0.3s ease;
  }

  :hover img {
    transform: scale(1.1);
  }
`;

const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  span {
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }
`;

const ItemName = styled.span`
  font-size: 16px;

  margin-top: 10px;
`;

const ItemPrice = styled.span`
  font-size: 14px;
  color: #6a6a6a;

  margin-top: 10px;
`;

const TitleContentProduct = styled.h1`
  font-family: "Montserrat", sans-serif;
`;

export {
  CardProduct,
  ContentProducts,
  ContentImgProduct,
  ItemName,
  ItemPrice,
  TitleContentProduct,
};
