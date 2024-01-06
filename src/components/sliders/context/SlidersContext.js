import React, { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import useSlider from "../hooks/useSlider";
import useSlidersActions from "../hooks/useSlidersActions";

export const SlidersContext = createContext();

const useContextValue = () => {
  const slidersCrud = useSlider();
  const sliderTableActions = useSlidersActions({
    removeSlider: slidersCrud.removeSlider,
  });

  const contextValue = useMemo(() => {
    return {
      slidersCrud,
      sliderTableActions,
    };
  }, [slidersCrud, sliderTableActions]);

  return contextValue;
};

export const SlidersProvider = ({ children }) => {
  const contextValue = useContextValue();

  return (
    <SlidersContext.Provider value={contextValue}>
      {children}
    </SlidersContext.Provider>
  );
};

SlidersProvider.propTypes = {
  children: PropTypes.node,
};
