import React from "react"
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  Spinner,
} from "react-bootstrap"
import { useState } from "react"

export default function MyNav(props) {
  const [keyword, setKeyword] = useState("")
  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Weather App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            {/* <span>{props.weatherInfo.timezone} </span> */}
            {/* <span>
              {props.weatherInfo.current !== null ? (
                props.weatherInfo.current.temp
              ) : (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              )}
            </span> */}
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={handleChange}
            className="mr-sm-2"
          />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  )
}
