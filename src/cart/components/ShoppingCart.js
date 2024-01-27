import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../components/products/context/ProductsContext";
import { ContentDescriptionCart, ContentShoppingCart } from "./style";
import Counter from "../../components/products/components/productDetails/components/Counter";
import {
  ContainerCount,
  PriceItemTotal,
  TextParcial,
} from "../../components/products/components/productDetails/components/style";
import { Col, Row } from "antd";

const ShoppingCart = () => {
  const { shoppingCart } = useContext(ProductsContext);
  const { cartItems, setCartItems } = shoppingCart;
  const [totalPrice, setTotalPrice] = useState(0);

  const updatePriceItem = (data) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === data.idProduct
          ? { ...item, priceTotalItem: data.price * data.counter }
          : item
      )
    );
  };

  useEffect(() => {
    const sum = cartItems.reduce((accumulator, item) => {
      return accumulator + (item.priceTotalItem || item.price);
    }, 0);
    setTotalPrice(sum);
  }, [cartItems]);

  return (
    <>
      <ContentShoppingCart>
        {cartItems?.map((product) => (
          <>
            <div className="product" key={product._id}>
              <Col xs={12}>
                <img src={product.imgs[0].url} alt={product.description} />
              </Col>

              <Col xs={24}>
                <ContentDescriptionCart>
                  <Row>
                    <Col xs={24}>
                      <span>{product.name}</span>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={24}>
                      <PriceItemTotal>
                        $
                        {product.priceTotalItem
                          ? product.priceTotalItem
                          : product.price}
                        COP
                      </PriceItemTotal>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24}>
                      <ContainerCount counterCart={true}>
                        <Col xs={24}>
                          <Counter
                            add={1}
                            remove={1}
                            updatePriceItems={updatePriceItem}
                            data={product}
                          />
                        </Col>
                      </ContainerCount>
                      <Col xs={24}>
                        <TextParcial>Valor Unidad </TextParcial>
                        <TextParcial>${product.price.toFixed(1)}</TextParcial>
                      </Col>
                    </Col>
                  </Row>
                </ContentDescriptionCart>
              </Col>
            </div>
          </>
        ))}
        <>
          <div className="total">
            <span>Total:</span>
            <span>{totalPrice}</span>
          </div>
        </>
      </ContentShoppingCart>
    </>
  );
};

export default ShoppingCart;
