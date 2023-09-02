/* eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import UserCard from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import UserModal from "../moleculues/modal/UserModal";
import { useSelectUsers } from "../../hooks/useSelectUsers";
import { useLoginUser } from "../../hooks/useLoginUser";

const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUsers();
  const { loginUser } = useLoginUser();

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

  useEffect(() => getUsers(), []);
  return (
    <>
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} spacing="5">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
          <UserModal
            isOpen={isOpen}
            onClose={onClose}
            user={selectedUser}
            isAdmin={loginUser?.isAdmin}
          />
        </Wrap>
      )}
    </>
  );
});

export default UserManagement;
