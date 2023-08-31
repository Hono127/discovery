import Home from "../components/pages/Home";
import Setting from "../components/pages/Setting";
import UserManagement from "../components/pages/UserManagement";


const HomeRouter = () => [
  {
    path: "/",
    children: <Home />
  },
  {
    path: "user_management",
    children: <UserManagement />
  },
  {
    path: "setting",
    children: <Setting />
  },
];

export default HomeRouter