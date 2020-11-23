import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Button, Card, Tooltip, OverlayTrigger } from "react-bootstrap";

const ColumnFilter = ({ allColumns, runToast }) => {
  const handlerClick = () => {
    localStorage.setItem(
      "data",
      JSON.stringify(
        allColumns
          .filter((column) => !column.isVisible)
          .map((column) => column.id)
      )
    );
  };

  return (
    <>
      <Card.Body>
        {allColumns.map((column) => (
          <div key={column.id}>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />
              {` ${column.id}`}
            </label>
          </div>
        ))}
        <div className="row mt-1">
          <OverlayTrigger
            overlay={<Tooltip id="tooltip-disabled">Save the settings</Tooltip>}
            placement="left"
          >
            <span className="mx-auto">
              <Button
                onClick={() => {
                  handlerClick();
                  runToast();
                }}
              >
                <i className="material-icons">save</i>
              </Button>
            </span>
          </OverlayTrigger>
        </div>
      </Card.Body>
    </>
  );
};

export default ColumnFilter;
