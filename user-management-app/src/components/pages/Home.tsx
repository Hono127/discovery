import { Button, Link } from '@chakra-ui/react'
import React, { FC, memo } from 'react'
import { Outlet } from 'react-router-dom'

const Home: FC = memo(() => {
  return (
    <div>
      ホームページです。
      <Outlet />
      <Link href='/'>
        <Button colorScheme='red'>
          ログアウト
        </Button>
      </Link>
    </div>
  )
})

export default Home