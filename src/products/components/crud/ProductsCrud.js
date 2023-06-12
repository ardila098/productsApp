import React from "react";

import { ContentProducts } from "./style";
import useProducts from "../../hooks/useProducts";
import { FormProductAdd } from "../forms/FormProductAdd";

import { useProductsForm } from "../../hooks/useProductsForm";
import DeleteButton from "../buttons/buttonsCrud/DeleteButton";
import EditButton from "../buttons/buttonsCrud/EditButton";
import ProductItem from "./ProductItem";

const ProductsCrud = () => {
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
              <DeleteButton remove={() => removeProduct(product._id)} />
              <EditButton update={() => getProduct(product)} />
            </div>
          </React.Fragment>
        ))} 
      </ContentProducts>
    </>
  );
};

export default ProductsCrud;
