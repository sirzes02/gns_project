import React from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import ColumnFilter from "./ColumnFilter";
import ColumnOrder from "./ColumnOrder";

const Filter = ({ allColumns, changeOrder }) => {
  return (
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
          <ColumnFilter allColumns={allColumns} />
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="1">
          <ColumnOrder allColumns={allColumns} changeOrder={changeOrder} />
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Filter;
