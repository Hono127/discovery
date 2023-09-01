import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      // 成功時の処理
      .then((res) => {
        setUsers(res.data);
      })
      // 失敗時の処理
      .catch(() => {
        showMessage({
          title: "ユーザーの取得に失敗しました",
          status: "error",
        });
      })
      // 成功の処理が終わったら行う処理
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { getUsers, loading, users };
};
