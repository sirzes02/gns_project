import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import Json2Excel from "../functions/Json2Excel";
import Json2Csv from "../functions/Json2Csv";

const Download = ({ data }) => {
  const [formatCSV, setFormatCSV] = useState(false);
  const [formatXSL, setFormatXSL] = useState(false);

  const download = () => {
    if (formatCSV) new Json2Csv(data).download();
    if (formatXSL) new Json2Excel(data).downLoad();
  };

  return (
    <Card>
      <Card.Header as="h5">Download the list</Card.Header>
      <Card.Body>
        <Card.Text>
          <Form.Check
            id="csvCheck"
            inline
            checked={formatCSV}
            label="CSV"
            onChange={() => setFormatCSV(!formatCSV)}
          />
          <Form.Check
            id="xslCheck"
            inline
            checked={formatXSL}
            label="XSL"
            onChange={() => setFormatXSL(!formatXSL)}
          />
        </Card.Text>
        <div className="text-center">
          <Button
            variant="warning"
            disabled={!formatCSV && !formatXSL}
            onClick={download}
          >
            <i className="material-icons">file_download</i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Download;
