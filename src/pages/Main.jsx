import { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true)

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev)
  }
  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <SideBar openDrawer={openDrawer} />
    </div>
  )
}
export default Main
