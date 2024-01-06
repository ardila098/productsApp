import { useCallback, useEffect } from "react";
import SlidersService from "../../../services/sliders/SlidersService";
import { useState } from "react";

const useSlider = () => {
  const [sliders, setSliders] = useState([]);
  const { getAllSliders, deleteSlider } = SlidersService();

  const getSliders = useCallback(async () => {
    console.log("oeeeee");
    const { data } = await getAllSliders();
    setSliders(data);
  }, []);

  const removeSlider = async (sliderId) => {
    console.log(sliderId);
    await deleteSlider(sliderId);
    getSliders();
  };

  // const updateSlider = async (product) => {
  //   await editSlider(product._id, product);
  //   getSliders();
  // };

  useEffect(() => {
    getSliders();
  }, [getSliders]);
  return {
    getSliders,
    sliders,
    removeSlider,
  };
};

export default useSlider;
