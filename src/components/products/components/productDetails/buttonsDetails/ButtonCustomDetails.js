import { Form } from "antd";
import PropType from "prop-types";
import React from "react";
import { ButtonCustom } from "../style";

const ButtonCustomDetails = ({ label, textBtn, name }) => {
  return (
    <>
      <Form.Item label={label}>
        <ButtonCustom key="submit" htmlType="submit" name={name}>
          {textBtn}
        </ButtonCustom>
      </Form.Item>
    </>
  );
};

export default ButtonCustomDetails;

ButtonCustomDetails.propType = {
  label: PropType.string,
  name: PropType.string,
};
