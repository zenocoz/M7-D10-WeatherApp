import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { render } from "react-dom"
import { useState, useEffect } from "react"
import MyNav from "./components/Navbar/Navbar"

function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      console.log("Latitude is :", latitude)
      console.log("Longitude is :", longitude)
    })
  }, [])

  return (
    <div className="App">
      <MyNav />
    </div>
  )
}

export default App
