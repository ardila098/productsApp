import { ContentProductsCustom } from "./style";
import { Col } from "antd";
import MenuFilter from "../menuFilter/MenuFilter";
import SearchCustom from "../../../searchCustom/SearchCustom";
import HeaderCustom from "../../../main/HeaderCustom";
import { Navbar } from "../../../../ui/components/Navbar";
import ProductsAll from "../productsAll/ProductsAll";


const ProductsCustom = () => {

  return (
    <>
      <ContentProductsCustom>
        <Navbar styleNav={false} />
        <Col xs={24}>
          <HeaderCustom />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              minWidth: "700px",
            }}
          >
            <SearchCustom modePage />
          </div>
        </Col>
        <Col xs={24}>
          <MenuFilter />
        </Col>
        <Col xs={24}>
          <ProductsAll />
        </Col>
      </ContentProductsCustom>
    </>
  );
};

export default ProductsCustom;
