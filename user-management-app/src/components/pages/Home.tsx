import React, { FC, memo } from 'react'
import { Outlet } from 'react-router-dom'

const Home: FC = memo(() => {
  return (
    <div>
      ホームページです。
      <Outlet />
    </div>
  )
})

export default Home