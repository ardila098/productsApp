import React from "react";
import useProducts from "../hooks/useProducts";
import { useProductsForm } from "../hooks/useProductsForm";
import DeleteButton from "./buttons/DeleteButton";
import EditButton from "./buttons/EditButton";
import { FormProductAdd } from "./forms/FormProductAdd";
import ProductItem from "./ProductItem";
import { ContentProducts } from "./style";

const ProductsList = () => {
  const { products, removeProduct, getData } = useProducts();
  const { getProduct, formState } = useProductsForm();

  return (
    <>
      <div>
        <FormProductAdd productEdit={formState} onSave={getData} />
      </div>

      <ContentProducts>
        {products.map((product) => (
          <React.Fragment key={product._id}>
            <div>
              <ProductItem key={product._id} {...product} />
            </div>
            <div>
              |
              <DeleteButton remove={() => removeProduct(product._id)} />
              <EditButton update={() => getProduct(product)} />
            </div>
          </React.Fragment>
        ))}
      </ContentProducts>
    </>
  );
};

export default ProductsList;
