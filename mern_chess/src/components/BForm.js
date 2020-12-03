import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class BForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      position: "start",
      sparePieces: false,
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ loading: false });
    this.props.handleData(this.state);
  };

  onSetPosition = (e) => {
    this.setState({ position: e.target.value });
  };

  onSetPieces = (e) => {
    console.log(e.target.value);
    this.setState({ sparePieces: e.target.value });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="position">
            <Form.Label>Position</Form.Label>
            <Form.Control
              as="select"
              defaultValue="start"
              onClick={this.onSetPosition}
            >
              <option value="start">Start</option>
              <option value="">Empty</option>
              <option value="fen">FEN String</option>
              <option value="pos">Positional Object</option>
            </Form.Control>
            <Form.Text className="text-muted">
              Enter 'start' for a normal starting board.The position to display
              on the board. Can be either a FEN string or a position object.
              Related info can be found below the form
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="sparePieces">
            <Form.Label>sparePieces</Form.Label>
            <Form.Control
              as="select"
              defaultValue="false"
              onClick={this.onSetPieces}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.submitForm}>
            Submit
          </Button>
        </Form>
        <br />
        <br />
        <span className="text-muted">
          FEN String: "2R5/4bppk/1p1p3Q/5R1P/4P3/5P2/r4q1P/7K b - - 6 50" <br />
          Position object: {`{e5: "wK", e4: "wP", e7: "bK" }`} <br />
        </span>
      </div>
    );
  }
}

export default BForm;
