import React from "react";
import { ContentButtons } from "./styled";
import ButtonLike from "./ButtonLike";
import ButtonAddCart from "./ButtonAddCart";

const ButtonsCard = () => {
  return (
    <div>
      <ContentButtons>
        <ButtonLike />
        <ButtonAddCart />
      </ContentButtons>
    </div>
  );
};

export default ButtonsCard;
