
import { useProductsForm } from "../../hooks/useProductsForm";
import AddButton from "../buttons/AddButton";
import { FormProduct, InputForm } from "./styled";

export const FormProductAdd = ({ productEdit }) => {
  const { onInputChange,  onFormSubmit } = useProductsForm();

  console.log(productEdit);

  const { category, name, stock, price, imgURL, description } = productEdit;

  return (
    <>
      <FormProduct onSubmit={onFormSubmit}>
        <InputForm
          type="text"
          className="form-control"
          placeholder="category"
          name="category"
          value={category}
          onChange={onInputChange}
        />

        <InputForm
          type="text"
          className="form-control"
          placeholder="name"
          name="name"
          value={name}
          onChange={onInputChange}
        />

        <InputForm
          type="text"
          className="form-control"
          placeholder="description"
          name="description"
          value={description}
          onChange={onInputChange}
        />

        <InputForm
          type="text"
          className="form-control"
          placeholder="stock"
          name="stock"
          value={stock}
          onChange={onInputChange}
        />

        <InputForm
          type="text"
          className="form-control"
          placeholder="price"
          name="price"
          value={price}
          onChange={onInputChange}
        />

        <InputForm
          type="file"
          className="form-control"
          placeholder="imgURL"
          name="imgURL"
          value={imgURL}
          onChange={onInputChange}
        />

        <AddButton />
      </FormProduct>
    </>
  );
};
