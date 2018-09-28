import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Container, Row, Col } from "reactstrap";
import "./Style.css";
import red from "@material-ui/core/colors/red";
import { FormControlLabel, Radio, withStyles } from "@material-ui/core";

const styles = {
  root: {
    //color: red[600],
    "&$checked": {
      color: red[500]
    }
  },
  checked: {}
};

class AdminUI extends Component {
  state = {
    selectedValue: "one"
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ selectedValue: event.target.value });
  };

  handleFirst(e) {
    console.log("clicked first");
    e.preventDefault();
  }

  handleSecond(e) {
    console.log("clicked second");
    e.preventDefault();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="admin">
        <div className="float-left ml-3">
          <FormControlLabel
            value="One"
            control={
              <Radio
                checked={this.state.selectedValue === "one"}
                onChange={this.handleChange}
                value="one"
                name="radio-button-demo"
                aria-label="One"
                classes={{
                  root: classes.root,
                  checked: classes.checked
                }}
              />
            }
            label="One"
          />

          <FormControlLabel
            value="Two"
            control={
              <Radio
                checked={this.state.selectedValue === "two"}
                onChange={this.handleChange}
                value="two"
                label="Two"
                name="radio-button-demo"
                aria-label="B"
                classes={{
                  root: classes.root,
                  checked: classes.checked
                }}
              />
            }
            label="Two"
          />

          <FormControlLabel
            value="Three"
            control={
              <Radio
                checked={this.state.selectedValue === "three"}
                onChange={this.handleChange}
                value="three"
                label="Three"
                name="radio-button-demo"
                aria-label="Three"
                classes={{
                  root: classes.root,
                  checked: classes.checked
                }}
              />
            }
            label="Three"
          />
        </div>
        <div className="container-fluid">
          <div className="btn-admin">
            <button
              className="btn btn-primary ml-2"
              onClick={this.handleFirst.bind(this)}
            >
              First
            </button>
            <button
              className="btn btn-primary ml-2"
              onClick={this.handleSecond.bind(this)}
            >
              Second
            </button>
          </div>
        </div>

        <div className="row">
          <textarea
            className="textarea"
            name="textArea"
            placeholder={this.state.selectedValue}
            id="myTextarea"
          />
        </div>
      </div>
    );
  }
}

AdminUI.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminUI);
