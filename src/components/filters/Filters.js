import React from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import ColumnFilter from "./ColumnFilter";
import ColumnOrder from "./ColumnOrder";
import { ToastContainer, toast } from "react-toastify";

const Filter = ({ allColumns, changeOrder }) => {
  const runToast = () => {
    toast("New settings have been saved", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="Filter">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Filter columns
            </Accordion.Toggle>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Order columns
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <ColumnFilter allColumns={allColumns} runToast={runToast} />
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="1">
            <ColumnOrder allColumns={allColumns} changeOrder={changeOrder} />
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
    </div>
  );
};

export default Filter;
