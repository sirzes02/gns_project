import React, { useState, useMemo, useRef, useCallback } from "react";
import Table from "./components/Table";
import requestData from "./data/content";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Columns from "./data/Columns";

const serverData = requestData;

function App() {
  const columns = useMemo(() => [Columns], []);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [searched, setSearched] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const fetchIdRef = useRef(0);

  const fetchData = useCallback(({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current;

    setLoading(true);

    if (fetchId === fetchIdRef.current) {
      const startRow = pageSize * pageIndex;
      const endRow = startRow + pageSize;
      setData(serverData.slice(startRow, endRow));

      setPageCount(Math.ceil(serverData.length / pageSize));

      setLoading(false);
    }
  }, []);

  const search = () => {
    setSearched(true);
    console.log(searchTitle);
  };

  const clear = () => {
    setSearched(false);
    setSearchTitle("");
  };

  const handlerChanges = (e) => setSearchTitle(e.target.value);

  return (
    <>
      <Navbar />
      <div className="row mt-3">
        <div className="col-md-2  pl-4">
          <Search
            searchTtile={searchTitle}
            handlerChange={handlerChanges}
            search={search}
            clear={clear}
          />
        </div>
        <div className="col-md-10">
          <Table
            columns={columns}
            data={data}
            fetchData={fetchData}
            loading={loading}
            pageCount={pageCount}
          />
        </div>
      </div>
    </>
  );
}

export default App;
