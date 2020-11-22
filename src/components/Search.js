import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const Search = ({ searchTitle, handlerChange, search, clear }) => {
  return (
    <Card>
      <Card.Header as="h5">Search a book</Card.Header>
      <Card.Body>
        <Card.Text>
          <Form.Control
            type="text"
            value={searchTitle}
            placeholder="Enter a word"
            onChange={handlerChange}
          />
          <Form.Text className="text-muted">With an idea is enough.</Form.Text>
        </Card.Text>
        <div className="row">
          <div className="col-md-6">
            <Button onClick={search}>Search</Button>
          </div>
          <div className="col-md-6">
            <Button variant="danger" onClick={clear}>
              Clear
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Search;
