import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";
import Button from "../button/Button";

interface NavbarProps {
  setToken: (token: string | null) => void;
}

interface RouteConfig {
  link: string;
  label: string;
}

const Navbar: FC<NavbarProps> = ({ setToken }) => {
  const routes: RouteConfig[] = [
    {
      link: "/users",
      label: "Users",
    },
    {
      link: "/badges",
      label: "Badges",
    },
  ];

  const logout = () => {
    setToken(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex flex-grow-1">
        {routes.map((route: RouteConfig) => {
          return (
            <NavLink key={route.link} to={route.link} className="nav-link mr-3">
              {route.label}
            </NavLink>
          );
        })}
      </div>

      <Button variant="outlined" color="secondary" onClick={logout}>
        Logout
      </Button>
    </nav>
  );
};

export default Navbar;
