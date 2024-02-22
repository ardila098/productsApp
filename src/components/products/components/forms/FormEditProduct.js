import React, { useContext, useEffect, useState } from "react";
import { Input, InputNumber, Form, Col, Row, Button, Upload } from "antd/es";
import { ProductsContext } from "../../context/ProductsContext";

const FormEditProduct = (id = "") => {
  const [form] = Form.useForm();
  const { productsCrud } = useContext(ProductsContext);
  const { addProduct, getProductById, updateProduct } = productsCrud;
  const [images, setImages] = useState([]);
  const [idProduct, setIdProduct] = useState();
  const [initialFileList, setInitialFileList] = useState([]);

  const handleSubmit = (values) => {
    console.log(values);
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
      updateProduct(idProduct, newDataProduct);
    } else {
      addProduct(product);
    }
  };

  const onUpload = (info) => {
    console.log(info.fileList);

    const updatedImages = info.fileList.filter(
      (file) => file.status !== "removed"
    );

    setInitialFileList(info.fileList);

    setImages(updatedImages.map((file) => file.originFileObj));
  };
  useEffect(() => {
    if (!id) {
      form.resetFields();
      setInitialFileList([]);
    } else {
      getProductById(id).then((data) => {
        console.log(data);
        form.setFieldsValue(data);
        setIdProduct(data._id);

        setInitialFileList(
          data.imgs.map((img) => ({
            uid: img._id,
            name: img.url,
            status: "done",
            url: img.url,
            originFileObj: img,
          }))
        );
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
