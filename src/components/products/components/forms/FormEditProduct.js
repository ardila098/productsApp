import React, { useEffect } from "react";
import { Input, InputNumber, Upload, Form, Col, Row, Button } from "antd/es";
import useProducts from "../../hooks/useProducts";

const FormEditProduct = (id) => {
  const [form] = Form.useForm();
  const { getProductById, UpdateProduct } = useProducts();

  const handleSubmit = () => {
    const values = form.getFieldsValue();

    if (id) {
      UpdateProduct(id, values);
    } else {
      UpdateProduct(values);
    }
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

        <Form.Item name="image" label="Image">
          <Upload>
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
