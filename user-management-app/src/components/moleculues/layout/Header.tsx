import {
  Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Heading, Link, useDisclosure
} from '@chakra-ui/react';
import { FC, memo } from 'react'

const Header: FC = memo(() => {
  const tab = 2;
  const { isOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex as="nav" bg="teal.500" color="gray50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Heading as="a" fontSize={{ base: "md", md: "lg" }} _hover={{ cursor: "pointer" }}>ユーザー管理アプリ</Heading>
        <Flex fontSize="sm" display={{ base: "none", md: "flex" }}>
          <Box pr="3"><Link>ユーザ一覧</Link></Box>
          <Box><Link>設定</Link></Box>
        </Flex>

      </Flex>
      <Drawer placement='left' size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="full">TOP</Button>
              <Button w="full">ユーザ一覧</Button>
              <Button w="full">設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
})

export default Header