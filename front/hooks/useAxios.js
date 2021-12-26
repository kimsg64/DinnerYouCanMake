import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FAILED_TO_SEARCH, SUCCEED_IN_SEARCHING } from "../reducers/search";

const useAxios = () => {
  const dispatch = useDispatch();
  const { keyword } = useSelector((state) => state.search);
  const [data, setData] = useState(null);
  const { selectedSequence } = useSelector((state) => state.detail);
  const [selectedData, setSelectedData] = useState(null);

  const fetchData = useCallback(() => {
    // console.log("useAxios");
    const keywordWithoutSpace = keyword.split(" ").join("");
    const key = process.env.NEXT_PUBLIC_API_KEY;
    // console.log(key);
    const URL = `http://openapi.foodsafetykorea.go.kr/api/${key}/COOKRCP01/json/1/1000/RCP_NM=${keywordWithoutSpace}&RCP_PARTS_DTLS=${keywordWithoutSpace}`;

    axios
      .get(URL)
      .then((response) => {
        dispatch({ type: SUCCEED_IN_SEARCHING });
        // console.log(response.data);
        if (response.data.COOKRCP01.RESULT.CODE === "INFO-000") {
          setData(response.data.COOKRCP01.row);
        } else if (response.data.COOKRCP01.RESULT.CODE === "INFO-200") {
          setData(null);
        }
      })
      .catch((error) => {
        dispatch({ type: FAILED_TO_SEARCH });
        // console.log("error", error);
      });
  }, [keyword]);

  useEffect(() => {
    if (keyword === "") return;
    fetchData();
  }, [keyword]);

  useEffect(() => {
    // console.log(data);
    if (data === null) return;
    if (selectedSequence === "") return;
    setSelectedData(
      data.filter((cuisine) => cuisine.RCP_SEQ === selectedSequence)[0]
    );
  }, [data, selectedSequence]);

  return { data, fetchData, selectedData };
};

export default useAxios;
