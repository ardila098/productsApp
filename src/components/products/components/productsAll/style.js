import styled from "styled-components";

const ContentProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 90%;
  justify-items: end;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
  font-family: "Baloo Tamma 2", system-ui;
  font-weight: 550;
  font-size: 1.1rem;
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
  border-radius: 7px;
  border-color: transparent;
  border: 5px;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 30px -12px inset,
    rgba(0, 0, 0, 0.1) 0px 12px 25px -18px inset;
  background-color: transparent; */
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));
  cursor: pointer;
  /* :hover {
    box-shadow: rgb(255, 255, 255, 0.2) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.2) -3px -3px 6px 1px inset;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.1) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  } */
  img {
    border: 5px;
    border-radius: 7px;
    width: 280px;
    height: 400px;
    transition: transform 0.4s ease;
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
    font-family: "Baloo Tamma 2", system-ui;
    font-weight: 550;
  }
`;

const ItemName = styled.span`
   font-size: 1.1rem;
  margin-top: 10px;
`;

const ItemPrice = styled.span`
    font-size: 1.1rem;
  color: black;

  margin-top: 10px;
`;

const TitleContentProduct = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  text-align: center;
`;

const ContenCustom = styled.div`
  min-height: 768px;
  /* background: #E3E1D9; */
  background: rgba(227, 225, 217, 0.2);

  .title {
    background-color: aliceblue;
  }
`;

const ButtonsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.9s ease;

  button {
    display: flex;
    margin-top: 0px;
    justify-content: center;
    align-items: center;
    max-width: 45px;
    border-radius: 7px;
    box-shadow: none;
    background: transparent;
    border: none;
  }
  ${ContentImgProduct}:hover & {
    visibility: visible;
    opacity: 1;
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
  ButtonsContainer,
};
