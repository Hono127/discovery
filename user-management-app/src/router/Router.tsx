import React, { FC, memo } from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../components/pages/Login"
import UserManagement from "../components/pages/UserManagement"
import Setting from "../components/pages/Setting"
import NotFound from "../components/pages/NotFound"
import Home from "../components/pages/Home"
import HeaderLayout from "../components/templetes/HeaderLayout"


const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<HeaderLayout><Home /></HeaderLayout>} />
      <Route path="/home/user_management" element={<HeaderLayout><UserManagement /></HeaderLayout>} />
      <Route path="/home/setting" element={<HeaderLayout><Setting /></HeaderLayout>} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>


  )
})

export default Router