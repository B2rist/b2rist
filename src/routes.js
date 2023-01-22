import React, { lazy } from 'react';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { getRouteById } from 'services/routeSlice';
import { Home } from '@mui/icons-material';

const LoginPage = lazy(() => import('components/login/LoginPage'));
const SharingPage = lazy(() => import('components/sharing/SharingPage'));
const ProfilePage = lazy(() => import('components/profile/ProfilePage'));
const HomePage = lazy(() => import('components/home/HomePage'));
const PlayRoutePage = lazy(() => import('components/route/PlayRoutePage'));
const RoutePage = lazy(() => import('components/route/RoutePage'));

const routes = [
  {
    path: '/login',
    element: <LoginPage />,
    unAuthenticated: true,
    fullScreen: true,
  },
  {
    path: '/home',
    element: <HomePage />,
    label: 'home',
    icon: <Home />,
    unAuthenticated: true,
    mainMenu: true,
  },
  {
    path: '/routes',
    element: <RoutePage />,
    label: 'routes',
    icon: <NearMeIcon />,
    mainMenu: true,
    unAuthenticated: true,
  },
  {
    path: '/sharing',
    element: <SharingPage />,
    label: 'sharing',
    icon: <PeopleAlt />,
    mainMenu: true,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    label: 'profile',
    icon: <PersonPinIcon />,
    mainMenu: true,
    unAuthenticated: true,
  },
  {
    path: '/play/:id',
    menuGroup: '/routes',
    element: <PlayRoutePage />,
    unAuthenticated: true,
    fullScreen: true,
    actions: [(params) => getRouteById({ id: params.id })],
  },
];

export default routes;
