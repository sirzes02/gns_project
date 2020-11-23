import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { Form } from "react-bootstrap";
import styles from "../../styles/CommonsStyles";

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:
      <Form.Control
        className="border-0"
        as="input"
        type="text"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={styles.fontsize}
        size="sm"
      />
    </span>
  );
};

export default GlobalFilter;
