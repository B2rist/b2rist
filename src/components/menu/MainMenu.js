import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import './MainMenu.css';
import { Link, useLocation } from 'react-router-dom';
import routes from 'routes';
import { useTranslation } from 'react-i18next';

const menuRoutes = routes.filter((route) => route.mainMenu);

const findPath = (path) => menuRoutes.find((match) => match.path?.includes(path))?.path;

const MainMenu = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  return (
    <Box className="main-menu">
      <Tabs value={findPath(pathname)} centered>
        {menuRoutes.map((route) => (
          <Tab
            key={route.path}
            icon={route.icon}
            label={t(`mainMenu.${route.label}`)}
            component={Link}
            to={route.path}
            value={route.path}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default MainMenu;
