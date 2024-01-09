import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import {
  ContentDetails,
  ContentDetailsProduct,
  ContentEspecificationProduct,
  ContentFirstDetails,
  ContentImgsPrev,
  ContentInitialImg,
  ContentSizes,
  ContentSliderDetails,
  NameDetails,
  PriceDetails,
  RowImgPrev,
  TitleDetails,
} from "./style";
import ButtonCustomDetails from "./buttonsDetails/ButtonCustomDetails";
import { Form, Radio, Row } from "antd";
// import Counter from "./components/Counter";
import { ContainerCount } from "./components/style";
import Counter from "./components/Counter";

const arraySize = {
  bra: [
    { id: 0, size: "XS", amount: 10 },
    { id: 1, size: "S", amount: 10 },
    { id: 2, size: "M", amount: 15 },
    { id: 3, size: "L", amount: 0 },
  ],
  pantie: [
    { id: 0, size: "XS", amount: 10 },
    { id: 1, size: "S", amount: 12 },
    { id: 2, size: "M", amount: 18 },
    { id: 3, size: "L", amount: 22 },
  ],
};

const ProductsDetails = () => {
  const id = useParams();
  const [form] = Form.useForm();
  const { productsCrud, shoppingCart } = useContext(ProductsContext);
  const { getProductById } = productsCrud;
  const { onAddToCart } = shoppingCart;
  const [product, setproduct] = useState();
  const [selectSizes, setSelectSizes] = useState({
    bra: "",
    pantie: "",
  });
  const [imgInitial, setImgInitial] = useState();

  console.log(selectSizes);

  const getProduct = async () => {
    const dataProduct = await getProductById(id);
    setproduct(dataProduct);
    setImgInitial(dataProduct.imgs[0].url);
  };

  console.log(product);

  const handleSubmit = async () => {
    const data = form.getFieldValue();
    console.log(data);
    const dataForm = {
      ...product,
      bra: data.bra,
      pantie: data.pantie,
    };
    onAddToCart(dataForm);
    console.log(dataForm);
  };
  const onChangeImgInitial = (img) => {
    setImgInitial(img.url);
  };

  const onSelectBra = ({ target }) => {
    console.log(target);
    const { name, value } = target;
    setSelectSizes({
      ...selectSizes,
      [name]: value,
    });
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <>
      <Form
        form={form}
        name="addToCart"
        onFinish={handleSubmit}
        layout="vertical"
      >
        <ContentFirstDetails>
          <ContentDetailsProduct>
            <ContentSliderDetails>
              <ContentInitialImg>
                <img src={imgInitial} alt="" />
              </ContentInitialImg>
              <ContentImgsPrev>
                {product?.imgs.map((img) => (
                  <RowImgPrev>
                    <img
                      src={img.url}
                      alt=""
                      onClick={() => onChangeImgInitial(img)}
                    />
                  </RowImgPrev>
                ))}
              </ContentImgsPrev>
            </ContentSliderDetails>
            <ContentEspecificationProduct>
              <TitleDetails>Especificaciones Del Producto</TitleDetails>

              <ContentDetails className="styleContenDetails">
                <Row>
                  <NameDetails>{product?.name}</NameDetails>
                </Row>
                <Row>
                  <PriceDetails>${product?.price}</PriceDetails>
                </Row>

                <ContentSizes>
                  <Form.Item name="bra" label="Bra">
                    <Radio.Group
                      value={selectSizes.bra}
                      onChange={onSelectBra}
                      name="bra"
                    >
                      {arraySize.bra.map((bra) => {
                        const isDisabled = bra.amount < 1;
                        return (
                          <Radio.Button
                            key={bra.id}
                            value={bra.size}
                            disabled={isDisabled}
                          >
                            {bra.size}
                          </Radio.Button>
                        );
                      })}
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item name="pantie" label="Pantie">
                    <Radio.Group
                      value={selectSizes.pantie}
                      onChange={onSelectBra}
                    >
                      {arraySize.bra.map((pantie) => {
                        return (
                          <Radio.Button key={pantie.id} value={pantie.size}>
                            {pantie.size}
                          </Radio.Button>
                        );
                      })}
                    </Radio.Group>
                  </Form.Item>
                </ContentSizes>

                <ContentSizes>
                  <p>{product?.description.slice(0, 120)}</p>
                </ContentSizes>

                <ContainerCount>
                  <Counter />
                </ContainerCount>

                <Row>
                  <ButtonCustomDetails
                    textBtn={"ADD TO CART"}
                    name={"addToCart"}
                  />
                </Row>
              </ContentDetails>
            </ContentEspecificationProduct>
          </ContentDetailsProduct>
        </ContentFirstDetails>
      </Form>
    </>
  );
};

export default ProductsDetails;
