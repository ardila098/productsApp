import PropType from "prop-types";
import React from "react";
import { ContentSearchCustom, ModalSearchStyle } from "./styled";
import SearchCustom from "./SearchCustom";

const ModalSeacrh = ({ show, onClose }) => {
  return (
    <ModalSearchStyle
      centered="top"
      width="100%"
      bodyStyle={{ height: "700px" }}
      open={show}
      onCancel={onClose}
      footer={null}
    >
      <ContentSearchCustom>
        <SearchCustom onClose={onClose} />
      </ContentSearchCustom>
    </ModalSearchStyle>
  );
};

export default ModalSeacrh;

ModalSeacrh.propType = {
  show: PropType.bool,
  onClose: PropType.func,
};
