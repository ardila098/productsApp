import React from "react";
import PropType from "prop-types";

const DeleteButton = ({remove}) => {
  return <button onClick={()=>remove()}>Eliminar</button>;
};

export default DeleteButton;

DeleteButton.propType = {
  remove: PropType.func,
};
