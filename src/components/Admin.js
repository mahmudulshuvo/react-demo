import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  InputLabel,
  FormControl,
  Select,
  Button,
  TextField
} from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import "./Style.css";
import { Row, Col, Container } from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import DeleteIcon from "@material-ui/icons/Delete";
import "react-json-inspector/json-inspector.css";
import ReactJson from "react-json-view";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    marginTop: "50px",
    //marginLeft: "50px",
    minWidth: 200
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: "25%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  textArea: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 800,
    marginTop: "16px"
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  textContainer: {
    flexDirection: "row"
  },
  textFieldDate: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class Admin extends Component {
  hideAll = false;
  state = {
    command: "",
    valueOne: "",
    valueTwo: "",
    hideAll: true,
    showOne: false,
    showAll: false
  };

  constructor() {
    super();
    this.state = {
      command: "",
      calender: "",
      valueOne: "",
      valueTwo: "",
      contentString: "",
      hideAll: true,
      showOne: false,
      showAll: false,
      apiData: "",
      data: {},
      jsonUrl: "https://jsonplaceholder.typicode.com/posts/",
      isFetched: false
    };
  }

  handleChange = command => event => {
    if (event.target.value == 1) {
      this.setState({
        hideAll: true,
        showOne: false,
        showAll: false,
        [command]: event.target.value
      });
      //console.log("one");
    }

    if (event.target.value == 2) {
      this.setState({
        hideAll: false,
        showOne: true,
        showAll: false,
        [command]: event.target.value
      });
      //console.log("two");
    }

    if (event.target.value == 3) {
      this.setState({
        hideAll: false,
        showOne: true,
        showAll: true,
        [command]: event.target.value
      });
      //console.log("three");
    }
  };

  handleChangeValueOne = valueOne => event => {
    this.setState({
      [valueOne]: event.target.value
    });
    console.log("value one ", this.state.valueOne);
  };

  handleChangeValueTwo = valueTwo => event => {
    this.setState({
      [valueTwo]: event.target.value
    });
    console.log("value two ", this.state.valueTwo);
  };

  handleChangeJsonUrl = jsonUrl => event => {
    console.log("json url on change: ", event.target.value);
    this.setState({
      [jsonUrl]: event.target.value
    });
    console.log("json url ", this.state.jsonUrl);
  };

  handleCalederValue = calender => event => {
    this.setState({
      [calender]: event.target.value
    });
    console.log("Date value ", this.state.calender);
  };

  showJsonData(e) {
    // Replace ./data.json with your JSON feed
    console.log("Json url to fetch ", this.state.jsonUrl);
    fetch(this.state.jsonUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Work with JSON data here
        this.setState({
          data: data,
          isFetched: true
        });
        console.log("my json data ", this.state.data);
        console.log("my json data ", this.state.data.length);
      })
      .catch(err => {
        // Do something for an error here
      });
  }

  clearJsonData(e) {
    this.setState({
      data: {},
      isFetched: false
    });
  }

  handleSubmit(e) {
    if (
      this.state.valueOne == "" &&
      this.state.valueTwo == "" &&
      this.state.calender == ""
    ) {
      this.setState({
        contentString: ""
      });
    } else {
      this.setState({
        contentString:
          this.state.valueOne +
          "\n" +
          this.state.valueTwo +
          "\n" +
          this.state.calender
      });
    }

    console.log(
      this.state.valueOne + this.state.valueTwo + this.state.calender
    );
  }

  handleClear(e) {
    this.setState({
      contentString: ""
    });
  }

  render() {
    const { classes } = this.props;
    var Inspector = require("react-json-inspector");
    return (
      <div>
        <AppBar className="app-bar" position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              React
            </Typography>
          </Toolbar>
        </AppBar>

        <div className="admin">
          <Row>
            <Col sm="12" md="3">
              <form autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel>Command</InputLabel>
                  <Select
                    native
                    value={this.state.age}
                    className="formControl"
                    onChange={this.handleChange("command")}
                    inputProps={{
                      name: "command",
                      id: "age-native-simple"
                    }}
                  >
                    <option value="" />
                    <option value={1}>COMMAND 1</option>
                    <option value={2}>COMMAND 2</option>
                    <option value={3}>COMMAND 3</option>
                  </Select>
                </FormControl>
              </form>
            </Col>

            <Col sm="12" md="3">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.handleSubmit.bind(this)}
              >
                Submit
              </Button>
            </Col>

            <Col sm="12" md="4">
              {this.state.hideAll ? null : (
                <form>
                  <FormControl className={classes.formControl}>
                    <Row>
                      {this.state.showOne ? (
                        <TextField
                          id="valueOne"
                          label="valueOne"
                          multiline
                          rowsMax="4"
                          className={classes.textField}
                          value={this.state.valueOne}
                          onChange={this.handleChangeValueOne("valueOne")}
                          margin="normal"
                          variant="outlined"
                        />
                      ) : null}
                    </Row>

                    <Row>
                      {this.state.showAll ? (
                        <TextField
                          id="valueTwo"
                          label="valueTwo"
                          multiline
                          rowsMax="4"
                          className={classes.textField}
                          value={this.state.valueTwo}
                          onChange={this.handleChangeValueTwo("valueTwo")}
                          margin="normal"
                          variant="outlined"
                        />
                      ) : null}
                    </Row>

                    <Row>
                      {this.state.showAll ? (
                        <TextField
                          id="calender"
                          label="Birthday"
                          type="date"
                          defaultValue=""
                          onChange={this.handleCalederValue("calender")}
                          style={{ position: "relative", top: 20, left: 10 }}
                          //className={classes.textFieldDate}
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      ) : null}
                    </Row>
                  </FormControl>
                </form>
              )}
            </Col>
            <Col sm="12" md="2" />
          </Row>
          <Row>
            <div className="container-text">
              <TextField
                id="details_area"
                label="Text Field"
                value={this.state.contentString}
                multiline
                rowsMax="15"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100px",
                  marginLeft: "60px",
                  marginRight: "40px",
                  marginTop: "40px"
                }}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        style={{
                          position: "absolute",
                          display: "flex",
                          float: "left",
                          top: 0,
                          right: 40
                        }}
                        onClick={this.handleClear.bind(this)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </div>
          </Row>
          <Row>
            <div className="container-fluid m-3">
              <Row>
                <Col md="8" sm="10">
                  <div className="container">
                    <TextField
                      id="jsonUrl"
                      label="Json Api"
                      multiline
                      rowsMax="4"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "50px",
                        marginLeft: "",
                        marginRight: "40px"
                      }}
                      className={classes.textField}
                      value={this.state.jsonUrl}
                      onChange={this.handleChangeJsonUrl("jsonUrl")}
                      margin="normal"
                      variant="outlined"
                    />
                  </div>
                </Col>
                <Col md="2" sm="5">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                    onClick={this.showJsonData.bind(this)}
                  >
                    Show Json Data
                  </Button>
                </Col>
                <Col md="2" sm="5">
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                    onClick={this.clearJsonData.bind(this)}
                  >
                    Clear Json Data
                  </Button>
                </Col>
              </Row>
            </div>
          </Row>
          <Row>
            <div className="container-fluid m-3 p-3">
              <Inspector data={this.state.data} />
              {/* {this.state.isFetched ? (
                <ReactJson
                  src={this.state.data}
                  theme="solarized"
                  collapsed="false"
                  // style={{ position: "relative", width: "100%", float: "left", alignItems: "flex-start" }}
                />
              ) : null} */}
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Admin);
