import { Form, Select } from "antd";
import PropType from "prop-types";

const SelectCustom = ({
  data,
  label,
  name,
  valuePropName,
  onChange,
  multiple = false,
}) => {
  return (
    <Form.Item name={name} label={label} valuePropName={valuePropName}>
      <Select
        options={data}
        mode={multiple ? "multiple" : ""}
        onChange={onChange}
      />
    </Form.Item>
  );
};

SelectCustom.propTypes = {
  data: PropType.array.isRequired,
  label: PropType.string,
  name: PropType.string,
  multiple: PropType.bool,
  valuePropName: PropType.string,
  onChange: PropType.func,
};

export default SelectCustom;
