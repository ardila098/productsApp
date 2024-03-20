import { useCallback, useEffect, useState } from "react";
import CategorysServices from "../../../../../services/categorys/CategorysServices";

const useCategorys = () => {
  const { getAllCategorys } = CategorysServices();
  const [dataCategorys, setDataCategorys] = useState([]);
  console.log(dataCategorys);
  const getCategorys = useCallback(async () => {
    const {data} = await getAllCategorys();
    setDataCategorys(data);
    console.log(dataCategorys);
  }, []);

  useEffect(() => {
    getCategorys();
  }, []);

  return { getCategorys, dataCategorys };
};

export default useCategorys;
