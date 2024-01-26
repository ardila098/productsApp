import styled from "styled-components";

const ContentShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  border-radius: none;
  margin: 1rem;
  padding: 1rem;
  font-family: "Montserrat", sans-serif;
  & > * {
    margin: 1rem 0;
  }

  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #dee2e6;
    padding-top: 1rem;
    gap: 20px;
   
    font-family: "Montserrat", sans-serif;

    & > * {
      margin: 0;
    }
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: bold;
  
  }

`;

const ContentDescriptionCart=styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export { ContentShoppingCart, ContentDescriptionCart };
