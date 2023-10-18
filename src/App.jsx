import { Outlet } from "react-router-dom";
import Header from "./basic-compo/Header";
import Footer from "./basic-compo/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
