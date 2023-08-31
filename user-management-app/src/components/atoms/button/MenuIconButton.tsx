import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { FC, memo } from 'react';

type Props = {
  onOpen: () => void;
}

const MenuIconButton: FC<Props> = memo((props) => {

  const { onOpen } = props
  return (
    <IconButton
      aria-label='メニューボタン'
      icon={<HamburgerIcon />}
      display={{ base: "block", md: "none" }}
      variant="unstyled"
      size="lg"
      onClick={onOpen}
    />
  )
})

export default MenuIconButton