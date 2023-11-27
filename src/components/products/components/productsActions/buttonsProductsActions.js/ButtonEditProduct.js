import { ButtonUpdateProduct } from "./styled";
import { Edit } from "react-feather";

const ButtonEditProduct = ({ handleEdit }) => {
  return (
    <>
      <ButtonUpdateProduct icon={<Edit />} onClick={() => handleEdit()} />
    </>
  );
};

export default ButtonEditProduct;
