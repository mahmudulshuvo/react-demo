import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import Settings from "./Settings";
import Replay from "./Replay";
import AdminUI from "./AdminUI";
import TestUI from "./TestUI";
import LandingPage from "./LandingPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">React Demo</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  {/* <Link to={"/"}> */}
                  <NavLink href="/testui">Test UI</NavLink>
                  {/* </Link> */}
                </NavItem>
                <NavItem>
                  {/* <Link to={"/adminui"}> */}
                  <NavLink href="/adminui">Admin UI</NavLink>
                  {/* </Link> */}
                </NavItem>
                <NavItem>
                  {/* <Link to={"/settings"}> */}
                  <NavLink href="/settings">Settings</NavLink>
                  {/* </Link> */}
                </NavItem>
                <NavItem>
                  {/* <Link to={"/replay"}> */}
                  <NavLink href="/replay">Replay</NavLink>
                  {/* </Link> */}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/testui" component={TestUI} />
            <Route exact path="/adminui" component={AdminUI} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/replay" component={Replay} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavBar;
