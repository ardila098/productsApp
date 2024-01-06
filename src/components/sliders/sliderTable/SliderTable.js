import React from "react";
import { useContext } from "react";
import { SlidersContext } from "../context/SlidersContext";
import { Table } from "antd";
import ContentActions from "../../products/components/productsActions/ContentActions";

const SliderTable = () => {
  const { slidersCrud, sliderTableActions } = useContext(SlidersContext);
  const { sliders } = slidersCrud;
  const { handleDelete, handleEdit } = sliderTableActions;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Items",
      dataIndex: "items",
      key: "items",
      render: (items) => (
        <>
          {items.map((item) => (
            <div key={item._id}>
              <p>{item.nameItem}</p>
              <p>{item.description}</p>
              {item.imgs.map((img) => (
                <img key={img._id} src={img.url} alt="Slider Item" width="50" />
              ))}
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Acciones",
      key: "actions",
      render: (_text, record) => (
        <>
          <ContentActions
            data={record}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </>
      ),
    },
  ];

  console.log(sliders);
  return (
    <Table
      columns={columns}
      dataSource={sliders}
      style={{ minWidth: "765px" }}
    />
  );
};

export default SliderTable;
