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

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    marginTop: "50px",
    marginLeft: "50px",
    minWidth: 200
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: "25%",
    marginLeft: "25%"
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
      apiData: ""
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

  handleCalederValue = calender => event => {
    this.setState({
      [calender]: event.target.value
    });
    console.log("Date value ", this.state.calender);
  };

  handleSubmit(e) {
    // Replace ./data.json with your JSON feed
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Work with JSON data here
        //for ()
        let title = data.map(title => title.body);
        let posts = "";
        for (let i = 0; i < 100; i++) {
          posts += title[i] + "\n";
        }
        //console.log(posts);
        this.setState({
          apiData: posts
        });
      })
      .catch(err => {
        // Do something for an error here
      });

    this.setState({
      contentString:
        this.state.valueOne +
        "\n" +
        this.state.valueTwo +
        "\n" +
        this.state.calender +
        "\n" +
        this.state.apiData
    });
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
            <Col sm="12" md="2">
              {/* <Button
                variant="contained"
                color="primary"
                style={{ position: "absolute", bottom: 0, left: 10 }}
                //className="clear-button"
                onClick={this.handleClear.bind(this)}
              >
                Clear
              </Button> */}
            </Col>
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
                  height: "300px",
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
                        onClick={this.handleClear.bind(this)}
                      >
                        {this.state.contentString.length > 0 ? (
                          <DeleteIcon />
                        ) : null}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
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
