import React from "react";
import { useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";

// styles & components
import AppLayout from "../components/AppLayout";
import SearchResult from "../components/SearchResult/";
import Loading from "../components/Loading";

const Home = () => {
  const { data } = useAxios();
  const isSearched = useSelector((state) => state.search.isSearched);
  const isSearching = useSelector((state) => state.search.isSearching);
  return (
    <>
      {isSearching && !isSearched && <Loading />}
      <AppLayout>
        {isSearched && !isSearching && <SearchResult data={data} />}
      </AppLayout>
    </>
  );
};
export default Home;
