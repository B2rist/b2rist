import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import "./MainMenu.css";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import routes from "routes";
import { useTranslation } from "react-i18next";

const menuRoutes = routes.filter((route) => route.mainMenu);

const MainMenu = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [{ route }] = matchRoutes(routes, location);
  return (
    <Box className="main-menu">
      <Tabs value={route.menuGroup || route.path} centered>
        {menuRoutes.map((item) => (
          <Tab
            key={item.path}
            icon={item.icon}
            label={
              <span className="main-menu-label">
                {t(`mainMenu.${item.label}`)}
              </span>
            }
            component={Link}
            to={item.path}
            value={item.path}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default MainMenu;
