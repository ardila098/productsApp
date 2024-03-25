import React, { useContext, useEffect, useState } from "react";
import PropType from "prop-types";
import { Input, InputNumber, Form, Col, Row, Button, Upload } from "antd/es";
import { ProductsContext } from "../../context/ProductsContext";
import SelectCategory from "../selects/SelectCategory";
import SelectGarmentType from "../selects/selectGarmentType/SelectGarmentType";

const FormEditProduct = ({ id }) => {
  const [form] = Form.useForm();
  const { productsCrud } = useContext(ProductsContext);
  const { addProduct, getProductById, updateProduct } = productsCrud;
  const [sizeInventories, setSizeInventories] = useState({});

  const [images, setImages] = useState([]);

  const [initialFileList, setInitialFileList] = useState([]);

  console.log(id);
  const handleSubmit = (values) => {
    console.log(values);
    console.log(sizeInventories);
    const product = {
      ...values,
      imgs: images,
    };
    console.log(product);
    if (id) {
      const newDataProduct = {
        ...values,
        imgs: images,
      };
      updateProduct(id, newDataProduct);
    } else {
      addProduct(product);
    }
  };

  const onUpload = (info) => {
    console.log(info.fileList);

    const updatedImages = info.fileList.filter(
      (file) => file.status !== "removed"
    );

    console.log(updatedImages);

    const newImages = updatedImages.map((file) => file.originFileObj);

    console.log(newImages);

    setInitialFileList(info.fileList);

    setImages(newImages);
  };
  useEffect(() => {
    if (!id) {
      form.resetFields();
      setInitialFileList([]);
    } else {
      getProductById(id).then((data) => {
        console.log(data);
        form.setFieldsValue(data);

        const dataImages = data.imgs.map((img) => ({
          uid: img._id,
          name: img.url,
          status: "done",
          url: img.url,
          originFileObj: img,
        }));
        setImages(dataImages);
        setInitialFileList(dataImages);
      });
    }
  }, [id]);

  return (
    <>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Row gutter={16}>
          <Col xs={24}>
            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <SelectCategory />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={12}>
            <Form.Item name="price" label="Price">
              <InputNumber />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <Form.Item name="stock" label="Stock">
              <InputNumber />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>

        <Row>
          <SelectGarmentType setSizeInventories={setSizeInventories} />
        </Row>

        <Form.Item name="imgs" label="Images">
          <Upload
            listType="picture-card"
            name="images"
            action="/api/upload"
            onChange={onUpload}
            fileList={initialFileList}
            multiple
          >
            <Button>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormEditProduct;

FormEditProduct.propType = {
  id: PropType.string,
};
