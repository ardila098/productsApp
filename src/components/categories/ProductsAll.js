import { useContext } from "react";
import { ProductsContext } from "../products/context/ProductsContext";
import ViewCategoryCustom from "../viewsCustom/ViewCategoryCustom";
import Main from "../main/Main";
import HeaderCustom from "../main/HeaderCustom";

const ProductsAll = () => {
  const { productsCrud } = useContext(ProductsContext);
  const { products } = productsCrud;
  console.log(products);

  return (
    <>
      <Main>
        <HeaderCustom />
        <ViewCategoryCustom />
      </Main>
    </>
  );
};

export default ProductsAll;
