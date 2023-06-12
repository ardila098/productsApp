import styled from "styled-components";

const ContentButtons = styled.div`
display: flex;
flex-wrap: nowrap;
gap: 20px;
background-color: white;
align-items: center;
`;

const ButtonAdd = styled.button`
  width: 30px;
`;

const ButtonLike = styled.button`
  width: 30px;
`;

export { ButtonAdd, ButtonLike, ContentButtons };
