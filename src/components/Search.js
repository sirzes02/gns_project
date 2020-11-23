import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Search = ({ search, restoreData }) => {
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <Card>
      <Card.Header as="h5">Search a book</Card.Header>
      <Card.Body>
        <Card.Text>
          <Form.Control
            id="title"
            type="text"
            value={searchTitle}
            placeholder="Enter a word"
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <Form.Text className="text-muted">With an idea is enough.</Form.Text>
        </Card.Text>
        <div className="row text-center">
          <div className="col">
            <Button
              disabled={searchTitle.length <= 0}
              onClick={() => search(searchTitle)}
            >
              <i className="medium material-icons">search</i>
            </Button>
          </div>
          <div className="col">
            <Button
              variant="danger"
              disabled={searchTitle.length <= 0}
              onClick={() => {
                setSearchTitle("");
                restoreData();
              }}
            >
              <i className="medium material-icons">delete_forever</i>
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Search;
