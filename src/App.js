import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { render } from "react-dom"
import { useState, useEffect } from "react"
import MyNav from "./components/Navbar/Navbar"

function App() {
  const [coordinates, setCoordinates] = useState({
    latitude: 0.0,
    longitude: 0.0,
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoordinates({
        ...coordinates,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })
    console.log("latitude is", coordinates.latitude)
    console.log("longitude is", coordinates.longitude)
  }, [])

  return (
    <div className="App">
      <MyNav />
    </div>
  )
}

export default App
