import React, { useContext, useState } from "react";
import PropType from "prop-types";
import { ProductsContext } from "../../../context/ProductsContext";
import SelectCustom from "../../../../SelectCustom/SelectCustom";
import { Col, Form, Input, Row } from "antd";

const SelectGarmentType = ({ setSizeInventories }) => {
  const { garmentTypeCrud } = useContext(ProductsContext);
  const { dataGarmentTypes } = garmentTypeCrud;
  const [selectedGarment, setSelectedGarment] = useState(null);

  const data = dataGarmentTypes.map((garment) => ({
    value: garment._id,
    label: garment.name,
  }));

  const onSelectGarmentType = (value) => {
    const garment = dataGarmentTypes.find((garment) => garment._id === value);
    if (garment) {
      setSelectedGarment(garment);
    }
  };
  const handleSizeInventoryChange = (sizeId, newValue) => {
    // Actualiza el inventario de la talla seleccionada
    setSelectedGarment((prevGarment) => ({
      ...prevGarment,
      pieces: prevGarment.pieces.map((piece) => ({
        ...piece,
        sizes: piece.sizes.map((size) =>
          size._id === sizeId ? { ...size, inventory: newValue } : size
        ),
      })),
    }));

    // Actualiza el estado sizeInventories
    setSizeInventories((prevSizeInventories) => ({
      ...prevSizeInventories,
      [sizeId]: newValue,
    }));
  };

  return (
    <>
      <Col xs={24}>
        <SelectCustom
          data={data}
          label="Tallas"
          name="garmenTypes"
          onChange={onSelectGarmentType}
        />
      </Col>
      {selectedGarment && (
        <Row>
          {selectedGarment.pieces.map((piece) => (
            <>
              <h4>{piece.piece}</h4>

              <Row key={piece.piece} gutter={20}>
                {piece.sizes.map((size) => (
                  <Col xs={4} key={size._id}>
                    <Form.Item label={size.name} name="inventory">
                      <Input
                        type="number"
                        value={size.inventory}
                        onChange={(e) =>
                          handleSizeInventoryChange(size._id, e.target.value)
                        }
                      />
                    </Form.Item>
                  </Col>
                ))}
              </Row>
            </>
          ))}
        </Row>
      )}
    </>
  );
};

SelectGarmentType.propTypes = {
  setSizeInventories: [PropType.func],
};

export default SelectGarmentType;
