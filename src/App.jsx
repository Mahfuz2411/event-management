import { Outlet } from "react-router-dom"
import Header from "./basic-compo/Header"
import Footer from "./basic-compo/Footer"

function App() {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
