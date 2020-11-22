import React from "react";
import {
  Button,
  Accordion,
  Card,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ColumnFilter = ({ allColumns }) => {
  const handlerClick = () => {
    toast("New settings have been saved", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Filter columns
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
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
                  overlay={
                    <Tooltip id="tooltip-disabled">Save the settings</Tooltip>
                  }
                  placement="left"
                >
                  <span className="mx-auto">
                    <Button onClick={handlerClick}>Save</Button>
                  </span>
                </OverlayTrigger>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ColumnFilter;
