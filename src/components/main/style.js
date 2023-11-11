import styled from "styled-components";

const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  img {
    display: flex;
    width: 150px;
  }
  @media (min-width: 769px) {
    justify-content: left;
  }
`;

const ContentTitleCustom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;

  padding: 20px;
  margin: 20px;
`;

const TextTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
`;

export { ContentLogo, ContentTitleCustom, TextTitle };
