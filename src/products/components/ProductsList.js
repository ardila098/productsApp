import useProducts from "../hooks/useProducts";
import DeleteButton from "./buttons/DeleteButton";
import EditButton from "./buttons/EditButton";
import { FormProductAdd } from "./forms/FormProductAdd";
import ProductItem from "./ProductItem";
import { ContentProducts } from "./style";

const ProductsList = () => {
  const { products, removeProduct, getProduct, productEdit } = useProducts();

  console.log(productEdit);

  return (
    <>
      <div>
        <FormProductAdd productEdit={productEdit} />
      </div>

      <ContentProducts>
        {products.map((product) => (
          <>
            <div>
              <ProductItem key={product.id} {...product} />
            </div>
            <div>
              <DeleteButton remove={() => removeProduct(product._id)} />
              <EditButton update={() => getProduct(product)} />
            </div>
          </>
        ))}
      </ContentProducts>
    </>
  );
};

export default ProductsList;
