import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
  useColumnOrder,
} from "react-table";
import BTable from "react-bootstrap/Table";
import GlobalFilter from "./filters/GlobalFilter";
import Filters from "./filters/Filters";

function Table({ columns, data, loading }) {
  const hiddenColumns = localStorage.getItem("data")
    ? [...JSON.parse(localStorage.getItem("data")), "image"]
    : ["image"];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    allColumns,
    setColumnOrder,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, hiddenColumns },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useColumnOrder
  );

  return (
    <div className="row">
      <div className="col-md-10 mt-3">
        <div className="row mb-2">
          <div className="col">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </div>
          <div className="col-md-2">
            <Form.Control
              size="sm"
              as="select"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[3, 5, 10].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Form.Control>
          </div>
        </div>
        <BTable striped bordered hover size="sm" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      <i className="small material-icons">
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "arrow_downward"
                            : "arrow_upward"
                          : ""}
                      </i>
                    </span>
                  </th>
                ))}
              </tr>
            ))}
            <tr>
              <th colSpan={visibleColumns.length}>
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              </th>
            </tr>
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
            <tr>
              <td colSpan="10000">
                {loading
                  ? "Loading..."
                  : `Showing ${page.length} of ~ ${preGlobalFilteredRows.length} results`}
              </td>
            </tr>
          </tbody>
        </BTable>
        <div className="col pagination">
          <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <i className="material-icons">fast_rewind</i>
          </Button>
          <Button onClick={previousPage} disabled={!canPreviousPage}>
            <i className="material-icons">navigate_before</i>
          </Button>
          <Button onClick={nextPage} disabled={!canNextPage}>
            <i className="material-icons">navigate_next</i>
          </Button>
          <Button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <i className="material-icons">fast_forward</i>
          </Button>
        </div>
      </div>
      <div className="col-md-2 pr-4">
        <Filters
          allColumns={allColumns}
          changeOrder={(columns) => setColumnOrder(columns)}
        />
      </div>
    </div>
  );
}
export default Table;
