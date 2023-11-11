import React from "react";
import { ContentTitleCustom, TextTitle } from "./style";

const TitleCustom = ({ title }) => {
  return (
    <ContentTitleCustom>
      <TextTitle>{title}</TextTitle>
    </ContentTitleCustom>
  );
};

export default TitleCustom;
