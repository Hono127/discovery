import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, useDisclosure } from '@chakra-ui/react'

const MenuIconButton = () => {
  const { onOpen } = useDisclosure();
  return (
    <IconButton
      aria-label='メニューボタン'
      icon={<HamburgerIcon />}
      display={{ base: "block", md: "none" }}
      variant="unstyled"
      size="lg"
      onClick={onOpen} />
  )
}

export default MenuIconButton