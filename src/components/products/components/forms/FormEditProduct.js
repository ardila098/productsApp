import React, { useEffect, useState } from "react";
import { Input, InputNumber, Form, Col, Row, Button, Upload } from "antd/es";
import useProducts from "../../hooks/useProducts";

const FormEditProduct = (id) => {
  const [form] = Form.useForm();
  const { getProductById, addProduct } = useProducts();
  const [images, setImages] = useState([]);

 
  const handleSubmit = (values) => {
    const product = {
      ...values,
      imgs: images,
    };
    console.log(product);
    addProduct(product);
  };


  const onUpload = (info) => {
    console.log(info.fileList);
    setImages(info.fileList.map(file => file.originFileObj));
  };


  useEffect(() => {
    if (id) {
      getProductById(id).then((data) => {
        form.setFieldsValue(data);
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
            <Form.Item name="category" label="Category">
              <Input />
            </Form.Item>
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

        <Form.Item name="imgs" label="Images">
          <Upload
            listType="picture-card"
            name="images"
            action="/api/upload"
            onChange={onUpload}
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