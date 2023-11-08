import styled from "styled-components";

const ContentSlider = styled.div`
  width: 100%;
  height: 700px;
  margin-bottom: 50px;
  min-width: 768px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  @media (max-width: 768px) {
    height: 300px;
    width: 100%;
  }

  video {
    width: 100%;
    height: 700px;
    min-width: 768px;
    @media (max-width: 768px) {
      height: 300px;
      width: 100%;
    }
  }
`;

export { ContentSlider };
