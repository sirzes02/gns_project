import React, { useState, useMemo, useRef, useCallback } from "react";
import Table from "./components/Table";
import requestData from "./data/content";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Columns from "./data/Columns";
import ScrollTop from "./components/ScrollTop";
import Download from "./components/Download";

const serverData = requestData;

const App = () => {
  const columns = useMemo(() => [Columns], []);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [searched, setSearched] = useState(false);
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

  const search = (title) => {
    setSearched(true);
    console.log(title);
  };

  return (
    <>
      <Navbar />
      <div className="row mt-3">
        <div className="col-md-2  pl-4">
          <Search search={search} />
          <div className="mt-4">
            <Download data={requestData} />
          </div>
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
      <ScrollTop />
    </>
  );
};

export default App;
