import React, { useContext, useState } from "react";
import { ProductsContext } from "../../components/products/context/ProductsContext";
import { ContentDescriptionCart, ContentShoppingCart } from "./style";
import Counter from "../../components/products/components/productDetails/components/Counter";
import { ContainerCount } from "../../components/products/components/productDetails/components/style";
import { Col, Row } from "antd";

const ShoppingCart = () => {
  const { shoppingCart } = useContext(ProductsContext);
  const [dataCount, setDataCount] = useState();
  const { cartItems } = shoppingCart;
  // console.log(cartItems);
  const total = cartItems.reduce(
    (acc, product) => acc + product.price * dataCount,
    0
  );

  console.log(cartItems);
  console.log(dataCount);

  return (
    <>
      <ContentShoppingCart>
        {cartItems.map((product) => (
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
                      <span>${product.price} COP</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24}>
                      <ContainerCount counterCart={true}>
                        <Counter
                          add={1}
                          remove={1}
                          setDataCount={setDataCount}
                          initialValue={product.quantity}
                          price={product.price}
                        />
                      </ContainerCount>
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
            <span>{total}</span>
          </div>
        </>
      </ContentShoppingCart>
    </>
  );
};

export default ShoppingCart;
