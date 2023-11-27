import React from "react";
import { Table } from "antd/es";
import ContentActions from "./productsActions/ContentActions";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const ProductsTable = () => {
  const { productsCrud } = useContext(ProductsContext);
  const { products } = productsCrud;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: {
        showTitle: false,
        ellipsis: true,
        maxWidth: 100,
      },
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    // {
    //   title: 'Image',
    //   dataIndex: 'imgURL',
    //   key: 'imgURL',
    //   render: url => <img src={url} alt="Product" width="50" />
    // },
    {
      title: "Images",
      dataIndex: "imgs",
      key: "imgs",
      render: (imgs) => (
        <>
          {imgs.map((img) => (
            <>
              <img
                key={img._id}
                src={img.url}
                alt="Product"
                width="50"
                height="60"
              />
            </>
          ))}
        </>
      ),
    },
    {
      title: "Acciones",
      key: "actions",
      render: (_text, record) => (
        <>
          <ContentActions data={record} />
        </>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products}
      style={{ minWidth: "765px" }}
    />
  );
};

export default ProductsTable;
