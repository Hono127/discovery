import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Link } from '@chakra-ui/react';
import React, { FC, memo } from 'react'

const Header: FC = memo(() => {
  return (
    <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between"
      padding={{ base: 3, md: 5 }}>
      <Heading as="a" fontSize={{ base: "md", md: "lg" }} _hover={{ cursor: "pointer" }}>ユーザー管理アプリ</Heading>
      <Flex fontSize="sm" display={{ base: "none", md: "flex" }}>
        <Box pr="3"><Link>ユーザ一覧</Link></Box>
        <Box><Link>設定</Link></Box>
      </Flex>
      <IconButton aria-label='メニューボタン' icon={<HamburgerIcon />} display={{ base: "block", md: "none" }} variant="unstyled" size="lg" />
    </Flex>
  );
})

export default Header