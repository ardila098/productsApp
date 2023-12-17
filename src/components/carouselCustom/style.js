import styled from "styled-components";

const ContainerItemsSearch = styled.div`
  max-width: 30rem;
  min-width: 30rem;
  margin-top: 40px;
  .slick-track {
    display: flex !important;
    flex-direction: row !important;

    div {
      display: flex;
      max-width: 20rem !important;
      justify-content: center !important;
      align-items: center !important;
      text-align: center;
    }
  }
  span {
    font-size: 15px;
  }
`;

const TextPrice = styled.span`
  font-size: 1rem;
`;
const TextOff = styled.span`
  font-size: 1rem;
  color: red;
`;

const ContainerItemCarousel = styled.div`
display: flex;
  color: black;
  font-family: "Montserrat", sans-serif;
background: white;
border-radius: 10px;
  width: 22rem;
justify-content: center;
  
  img {
    max-width: 220px;
    height: 300px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const CarouselItem = styled.li``;

export {
  CarouselItem,
  ContainerItemCarousel,
  ContainerItemsSearch,
  TextPrice,
  TextOff,
};
