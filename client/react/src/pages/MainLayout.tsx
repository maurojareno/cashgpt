import { Outlet } from "react-router-dom"
import { Navbar } from "../shared/components/Navbar"

export const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}
