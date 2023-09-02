import { Button, Link } from "@chakra-ui/react";
import { FC, memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickUserManagement = () => navigate("/home/user_management");
  return (
    <div>
      ホームページです。
      <Outlet />
      <Link href="/">
        <Button colorScheme="red">ログアウト</Button>
      </Link>
      <Link onClick={onClickUserManagement}>
        <Button colorScheme="whatsapp">ユーザ一覧</Button>
      </Link>
    </div>
  );
});

export default Home;
