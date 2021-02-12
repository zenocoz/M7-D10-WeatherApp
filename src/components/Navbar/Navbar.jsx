import React from "react"
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap"

export default function MyNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Weather App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <span>City </span>
            <span>temperature and icon</span>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  )
}
