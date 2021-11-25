import Loginpage from "../Pages/Loginpage";
import Registerpage from "../Pages/Registerpage";
import Homepage from '../Pages/Userpage/Homepage'
import Aboutpage from '../Pages/Userpage/Aboutpage'
import Myportfoliopage from '../Pages/Userpage/Myportfoliopage'

export const AUTH_ROUTER = [
  {
    id: 1,
    routerName: "Login",
    routerPath: "/",
    routerComponent: <Loginpage />,
  },
  {
    id: 2,
    routerName: "Register",
    routerPath: "/register",
    routerComponent: <Registerpage />,
  },
];


export const MAIN_MODEL= [
  {
    id: 1,
    routerName: "Home",
    routerPath: "/user/home",
    routerComponent: <Homepage/>,
  },
  {
    id: 2,
    routerName: "About us",
    routerPath: "/user/aboutus",
    routerComponent: <Aboutpage/>,
  },
  {
    id: 3,
    routerName: "My Portfolio",
    routerPath: "/user/myportfolio",
    routerComponent: <Myportfoliopage />,
  }
]
