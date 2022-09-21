import React, { useEffect, useState } from "react";

const FetchData = ({ page, search }) => {
  const [jobs, setJob] = useState([]);
  const [error, setError] = useState();

  const fetchData = async (_page, _search) => {
    //
    try {
      const response = await fetch(
        `https://frcz3.sse.codesandbox.io/jobs?_page=${_page}&_limit=10&q=${_search}`
      );
      const data = await response.json();
      setJob(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }; //?
  useEffect(() => {
    fetchData(page, search);
    console.log("avasv");
  }, [page, search]);
  console.log("hiweg");
  return (
    <>
      <ul>
        {jobs.map((job) => (
          <li>{job.title}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchData;
