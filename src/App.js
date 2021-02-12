import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { render } from "react-dom"
import { useState, useEffect } from "react"
import MyNav from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import { Route } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

function App() {
  // const [coordinates, setCoordinates] = useState({
  //   latitude: 0.0,
  //   longitude: 0.0,
  // })

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setCoordinates({
  //       ...coordinates,
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude,
  //     })
  //   })
  //   console.log("latitude is", coordinates.latitude)
  //   console.log("longitude is", coordinates.longitude)
  // }, [])

  const [coords, setCoords] = useState({ latitude: 0, longitude: 0 })
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const {
        coords: { latitude, longitude },
      } = position
      setCoords({ latitude, longitude })
    })
    oneCall(coords.latitude, coords.longitude)
  }, [])

  const oneCall = async (lat, lon) => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.API_KEY}`, {
        method: 'GET',
        Headers: 
      }
    ) 
  }

  console.log("latitude is", coords.latitude)
  console.log("longitude is", coords.longitude)

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            {/* <div>
              latitude: {coords.latitude}, longitude: {coords.longitude}
            </div> */}
            <MyNav />
            <Route>
              <Home />
            </Route>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
