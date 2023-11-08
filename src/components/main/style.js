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

export { ContentLogo };
