import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Input, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ContentSearch, FilterMenu, SearchInput } from "./styled";

export default function Search() {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState("");
  const [searchParams] = useState(["name", "category", "price", "color"]);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const search = (items) => {
    return items.filter((item) => {
      return searchParams.some((param) => {
        return (
          item[param].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  return (
    <ContentSearch>
      <SearchInput
        placeholder="Search for..."
        enterButton="Search"
        size="large"
        onSearch={(value) => setQ(value)}
        style={{ width: 400 }}
      />
      <FilterMenu>
        {searchParams.map((param) => (
          <Menu.Item key={param}>{param}</Menu.Item>
        ))}
      </FilterMenu>
      <div>
        {search(products).map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </ContentSearch>
  );
}
