import React from "react";
import PropTypes from "prop-types";

const EditButton = ({ update }) => {
  return <button onClick={() => update()}>Editar</button>;
};

export default EditButton;

EditButton.propTypes = {
  update: PropTypes.func,
};
