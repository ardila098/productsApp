import styled from "styled-components";



const ContentProducts = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

const CardProduct = styled.div`
display:flex;
flex-wrap: wrap;
flex-direction:row;
width:200px;
img{
    width: 100px;

}
`;
const TitleProduct = styled.h4`

`;

const ContentImg = styled.div`

`;

export { CardProduct, TitleProduct, ContentImg , ContentProducts};
