import { useCallback, useEffect, useState } from "react";
import garmentServices from "../../../../../../services/garment/garmentServices";

const useSelectGarmentType = () => {
  const { getAllCategarmentTypes } = garmentServices();
  const [dataGarmentTypes, setDataGarmentTypes] = useState([]);

  console.log(dataGarmentTypes);

  const getGarmentTypes = useCallback(async () => {
    const { data } = await getAllCategarmentTypes();
    setDataGarmentTypes(data);
    console.log(data);
  }, []);

  useEffect(() => {
    getGarmentTypes();
  }, []);

  return {
    dataGarmentTypes,
  };
};

export default useSelectGarmentType;
