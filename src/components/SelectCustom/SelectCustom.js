import { Form, Select } from "antd";
import PropType from "prop-types";

const SelectCustom = ({
  data,
  label,
  name,
  valuePropName,
  multiple = false,
}) => {
  return (
    <Form.Item name={name} label={label} valuePropName={valuePropName}>
      <Select options={data} mode={multiple ? "multiple" : ""} />
    </Form.Item>
  );
};

SelectCustom.propTypes = {
  data: PropType.array.isRequired,
  label: PropType.string,
  name: PropType.string,
  multiple: PropType.bool,
  valuePropName: PropType.string,
};

export default SelectCustom;
