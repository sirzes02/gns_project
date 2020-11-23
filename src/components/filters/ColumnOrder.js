import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Card } from "react-bootstrap";
import { List, arrayMove } from "react-movable";

const ColumnOrder = ({ allColumns, changeOrder }) => {
  const [columns, setColumns] = React.useState(
    allColumns.map((column) => column.id)
  );

  return (
    <Card.Body>
      <div className="mb-4">
        <h7>Drag and drop</h7>
      </div>
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
