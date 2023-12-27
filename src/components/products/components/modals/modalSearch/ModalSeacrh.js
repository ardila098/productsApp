import PropType from "prop-types";
import React from "react";

import {
  ContenSearchFirst,
  ContentSearchCustom,
  ModalSearchStyle,
} from "./styled";
import ResultSearch from "./ResultSearch";
import SearchCustom from "../../../../searchCustom/SearchCustom";

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
          <SearchCustom onClose={onClose} modePage={false}/>
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
