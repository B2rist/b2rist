import React from 'react';
import 'components/main/Main.css';
import { Outlet } from 'react-router-dom';
import MainMenu from 'components/menu/MainMenu';

const Main = () => (
    <div>
      <Outlet />
      <MainMenu />
    </div>
  );

export default Main;
