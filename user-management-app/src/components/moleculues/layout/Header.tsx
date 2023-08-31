import {
  Box, Flex, Heading, Link, useDisclosure
} from '@chakra-ui/react';
import { FC, memo } from 'react'
import MenuIconButton from '../../atoms/button/MenuIconButton';
import MenuDrawer from '../MenuDrawer';
import { useNavigate } from 'react-router-dom';

const Header: FC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const onClickHome = () => navigate('/home');
  const onClickUserManagement = () => navigate('/home/user_management');
  const onClickSetting = () => navigate('/home/setting');
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Heading
          as="a"
          fontSize={{ base: "md", md: "lg" }}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          ユーザー管理アプリ
        </Heading>
        <Flex fontSize="sm" display={{ base: "none", md: "flex" }}>
          <Box pr="3">
            <Link onClick={onClickUserManagement}>ユーザ一覧</Link>
          </Box>
          <Box>
            <Link onClick={onClickSetting}>設定</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
})

export default Header