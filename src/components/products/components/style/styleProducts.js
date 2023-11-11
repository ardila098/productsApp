import styled from "styled-components";

const ContentProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 90%;
  justify-items: end;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
  margin-top: 70px;
  min-width: 656px;
  .image-container {
    position: relative;
    overflow: hidden;
  }
  button {
    margin: 20px auto;
    align-items: center;
    display: flex;
    width: 100px;
    min-height: 30px;
    font-size: 10px;
    height: 40px;
    color: black;
    background-color: white;
  }
`;

const ContentImgProduct = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
  img {
    width: 280px;
    height: 410px;
    transition: transform 0.3s ease;
  }

  /* :hover img {
    transform: scale(1.1);
  } */
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

const TitleContentProduct = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  text-align: center;
`;

const ContenCustom = styled.div`
  min-height: 768px;
  .title {
    background-color: aliceblue;
  }
`;

export {
  CardProduct,
  ContentProducts,
  ContentImgProduct,
  ItemName,
  ItemPrice,
  TitleContentProduct,
  ContenCustom,
};
