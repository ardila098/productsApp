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

  padding: 20px;
  margin: 20px;
`;

const TextTitle = styled.h3`
  font-family: "Baloo Tamma 2", system-ui;
    font-weight: 750;
    font-size: 1.6rem;
`;

export { ContentLogo, ContentTitleCustom, TextTitle };
