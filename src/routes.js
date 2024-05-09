import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHome,
} from "react-icons/md";

import Home from "views/home/home";

const routes = [
  {
    name: "Home",
    layout: "/",
    path: "/",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Home,
  },
];

export default routes;
