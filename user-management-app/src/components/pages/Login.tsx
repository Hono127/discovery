import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import PrimaryButton from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

const Login: FC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState<string>("");
  const onChaneUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);
  const onClickLogin = () => login(userId);
  return (
    <div>
      <Flex justify="center" align="center" height="100vh">
        <Box bg="white" w="sm" p={4} borderRadius={5}>
          <Heading as="h1" textAlign="center">
            ユーザー管理
          </Heading>
          <Divider my={5} />
          <Stack spacing={3} py={4} px={10}>
            <Input
              placeholder="ユーザーID"
              value={userId}
              onChange={onChaneUserId}
            ></Input>
            <PrimaryButton
              loading={loading}
              onClick={onClickLogin}
              disabled={userId === ""}
            >
              ログイン
            </PrimaryButton>
          </Stack>
        </Box>
      </Flex>
    </div>
  );
});

export default Login;
