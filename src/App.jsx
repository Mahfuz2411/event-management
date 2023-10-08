import { Outlet } from "react-router-dom"
import Header from "./basic-compo/Header"
import Footer from "./basic-compo/Footer"

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
