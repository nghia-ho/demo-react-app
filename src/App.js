import React, { useState } from "react";
import FetchData from "./components/FetchData";
import Button from "./components/FetchData/Button";
import IntroComponent from "./components/Intro";
import Search from "./components/FetchData/Search";
const App = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const increase = () => {
    setPage(page + 1);
    console.log("increase");
  };
  const decrease = () => {
    setPage(page - 1);
  };
  return (
    <>
      <IntroComponent />
      <Search search={search} setSearch={setSearch} />
      <FetchData page={page} search={search} />
      <Button increase={increase} decrease={decrease} />
    </>
  );
};

export default App;
