import { useProductsForm } from "../../hooks/useProductsForm";
import AddButton from "../buttons/buttonsCrud/AddButton";
import { FormProduct, InputForm } from "./styled";

export const FormProductAdd = ({ productEdit, onSave }) => {
  const { onInputChange, onFormSubmit, formState } = useProductsForm(
    productEdit,
    onSave
  );

  const { category, name, description, stock, price, imgURL } = formState;

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
          onChange={onInputChange}
        />

        <AddButton />
      </FormProduct>
    </>
  );
};
