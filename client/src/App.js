import React from 'react';
import './App.css';
import AssignRoles from './AssignRoles';
import Home from './Home';
import AddMed from './AddMed';
import Supply from './Supply';
import Track from './Track';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap'; // Using React-Bootstrap for UI components

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">Supply Chain DApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/roles">Assign Roles</Nav.Link>
              <Nav.Link as={Link} to="/addmed">Add Medicine</Nav.Link>
              <Nav.Link as={Link} to="/supply">Supply</Nav.Link>
              <Nav.Link as={Link} to="/track">Track</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="mt-3">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/roles" component={AssignRoles} />
            <Route path="/addmed" component={AddMed} />
            <Route path="/supply" component={Supply} />
            <Route path="/track" component={Track} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
