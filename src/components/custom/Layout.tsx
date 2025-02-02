import { Outlet } from "react-router-dom";
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen flex justify-center items-center">
        <div className="container min-h-screen   ">
          <Navbar />


          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
