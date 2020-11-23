import React, { useState, useEffect, useMemo } from "react";
import Table from "./components/Table";
import { data as data1, data2 } from "./data/content";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Columns from "./data/Columns";
import ScrollTop from "./components/ScrollTop";
import Download from "./components/Download";
import Books from "./api/Books";

const App = () => {
  const columns = useMemo(() => [Columns], []);
  const myBooks = new Books();
  //const primaryData = myBooks.getBooks();
  const primaryData = data1;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState(true);

  useEffect(() => {
    restoreData();
    setLoading(false);
  }, []);

  const restoreData = () => {
    if (searched) {
      //setData(primaryData);
      setData(primaryData);
      setSearched(false);
    }
  };

  const search = (title) => {
    setLoading(true);
    //setData(myBooks.getBooks(title));
    setData(data2);
    setSearched(true);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="row mt-3">
        <div className="col-md-2  pl-4">
          <Search search={search} restoreData={restoreData} />
          <div className="mt-4">
            <Download data={data} />
          </div>
        </div>
        <div className="col-md-10">
          <Table columns={columns} data={data} loading={loading} />
        </div>
      </div>
      <ScrollTop />
    </>
  );
};

export default App;
