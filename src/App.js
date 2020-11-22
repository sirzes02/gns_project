import React, { useState, useMemo, useRef, useCallback } from "react";
import Table from "./components/Table";
import requestData from "./data/content";
import { Form, Button, Card } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Swal from "sweetalert2";

const serverData = requestData;

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Books",
        columns: [
          {
            id: "title",
            Header: "Title",
            accessor: "title",
            Cell: ({ row }) => (
              <p
                style={{ cursor: "pointer" }}
                onClick={() =>
                  Swal.fire({
                    title: row.values.title,
                    text: row.values.subtitle,
                    imageUrl: row.values.image,
                    imageAlt: row.values.isbn13,
                  })
                }
              >
                <u>{row.values.title}</u>
              </p>
            ),
          },
          {
            id: "subtitle",
            Header: "Subtitle",
            accessor: "subtitle",
            width: 30,
          },
          {
            id: "isbn",
            Header: "ISBN",
            accessor: "isbn13",
          },
          {
            id: "price",
            Header: "Price",
            accessor: "price",
            align: "right",
          },
          {
            id: "url",
            Header: "URL",
            accessor: "url",
            Cell: ({ row }) => (
              <a href={row.values.url}>
                <u>{row.values.url}</u>
              </a>
            ),
          },
          {
            id: "image",
            Header: "Image",
            accessor: "image",
          },
        ],
      },
    ],
    []
  );

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

  return (
    <>
      <Navbar />
      <div className="row mt-3">
        <div className="col-md-2  pl-4">
          <Card>
            <Card.Header as="h5">Search a book</Card.Header>
            <Card.Body>
              <Card.Text>
                <Form.Control
                  type="text"
                  value={searchTitle}
                  placeholder="Enter a word"
                  onChange={(e) => setSearchTitle(e.target.value)}
                />
                <Form.Text className="text-muted">
                  With an idea is enough.
                </Form.Text>
                <div className="row">
                  <div className="col-md-6">
                    <Button size="sm" onClick={search}>
                      Search
                    </Button>
                  </div>
                  <div className="col-md-6">
                    <Button size="sm" variant="danger" onClick={clear}>
                      Clear
                    </Button>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="container"></div>
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
