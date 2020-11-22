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
        <div className="row text-center">
          <div className="col">
            <Button onClick={search}>
              <i className="medium material-icons">search</i>
            </Button>
          </div>
          <div className="col">
            <Button variant="danger" onClick={clear}>
              <i className="medium material-icons">delete_forever</i>
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Search;
