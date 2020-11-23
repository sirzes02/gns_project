import "react-toastify/dist/ReactToastify.css";
import React from "react";
import {
  Button,
  Accordion,
  Card,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { List, arrayMove } from "react-movable";

const ColumnOrder = ({ allColumns, changeOrder }) => {
  const [columns, setColumns] = React.useState(
    allColumns.map((column) => column.id)
  );

  return (
    <Card.Body>
      <List
        values={columns}
        onChange={({ oldIndex, newIndex }) => {
          const aux = arrayMove(columns, oldIndex, newIndex);
          setColumns(aux);
          changeOrder(aux);
        }}
        renderList={({ children, props }) => <ul {...props}>{children}</ul>}
        renderItem={({ value, props }) => (
          <li className="border rounded my-1 p-1" {...props}>
            {value}
          </li>
        )}
      />
    </Card.Body>
  );
};

export default ColumnOrder;
