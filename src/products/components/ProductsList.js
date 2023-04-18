import useProducts from "../hooks/useProducts";
import DeleteButton from "./buttons/DeleteButton";
import EditButton from "./buttons/EditButton";
import { FormProductAdd } from "./forms/FormProductAdd";
import ProductItem from "./ProductItem";
import { ContentProducts } from "./style";

const ProductsList = () => {
  const { products, removeProduct, updateProduct } = useProducts();

  return (
    <>
      <div>
        <FormProductAdd />
      </div>

      <ContentProducts>
        {products.map((product) => (
          <>
            <div>
              <ProductItem key={product.id} {...product} />
            </div>
            <div>
              <DeleteButton remove={() => removeProduct(product._id)} />
              <EditButton update={() => updateProduct(product)} />
            </div>
          </>
        ))}
      </ContentProducts>
    </>
  );
};

export default ProductsList;
