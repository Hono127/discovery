import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react'
import { FC, memo } from 'react'

type Props = {
  onClose: () => void
  isOpen: boolean
  onClickSetting: () => void
  onClickHome: () => void
  onClickUserManagement: () => void
}

const MenuDrawer: FC<Props> = memo((props) => {

  const { onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting } = props;
  return (
    <Drawer placement='left' size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="full" onClick={onClickHome}>TOP</Button>
            <Button w="full" onClick={onClickUserManagement}>ユーザ一覧</Button>
            <Button w="full" onClick={onClickSetting}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})

export default MenuDrawer