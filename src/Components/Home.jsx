import { ToastContainer } from "react-toastify";
import Banner from "./Banner";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Services from "./Services";
import Tasks from "./Tasks";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Tasks/>
      <Services/>
      <Contact/>
      <ToastContainer position="top-right" bodyClassName="text-center font-bold text-blue-900"/>
    </div>
  )
}