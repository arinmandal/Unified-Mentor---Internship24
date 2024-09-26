import { useEffect, useState } from "react";
import { getMenuApi } from "../constantFile";
import axios from "axios";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResinfo] = useState(null);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const fetchData = async () => {
    const response = await axios.get(getMenuApi(resId))
    console.log(response)
    setResinfo(response);
  }
  return resInfo;
}

export default useRestaurantMenu;