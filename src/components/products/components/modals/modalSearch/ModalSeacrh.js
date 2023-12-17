import PropType from "prop-types";
import React from "react";
import SearchCustom from "../../../../searchCustom/SearchCustom";
import {
  ContenSearchFirst,
  ContentSearchCustom,
  ModalSearchStyle,
} from "./styled";
import ResultSearch from "./ResultSearch";

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
        <ContenSearchFirst>
          <SearchCustom onClose={onClose} />
          <ResultSearch />
        </ContenSearchFirst>
      </ContentSearchCustom>
    </ModalSearchStyle>
  );
};

export default ModalSeacrh;

ModalSeacrh.propType = {
  show: PropType.bool,
  onClose: PropType.func,
};
