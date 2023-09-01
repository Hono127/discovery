import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
};

const UserModal: FC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Box>ユーザー名</Box>
              <Box border="1px" borderColor="gray.300">
                {user?.username}
              </Box>

              <Box>フルネーム</Box>
              <Box border="1px" borderColor="gray.300">
                {user?.name}
              </Box>

              <Box>メール</Box>
              <Box border="1px" borderColor="gray.300">
                {user?.email}
              </Box>

              <Box>電話</Box>
              <Box border="1px" borderColor="gray.300">
                {user?.phone}
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});

export default UserModal;
