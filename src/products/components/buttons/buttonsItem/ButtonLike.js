import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import { ButtonLikeCard } from "../../../items/Styled";

const ButtonLike = () => {
  return (
    <ButtonLikeCard
    className="buttonIcon"
    icon={<HeartOutlined />}
  ></ButtonLikeCard>
  );
};

export default ButtonLike;
