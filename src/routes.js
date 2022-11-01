import React, { lazy } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import NearMeIcon from '@mui/icons-material/NearMe';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const AddRoutePage = lazy(() => import('components/route/AddRoutePage'));
const ProfilePage = lazy(() => import('components/profile/ProfilePage'));
const FavoritePage = lazy(() => import('components/favorite/FavoritePage'));
const RoutePage = lazy(() => import('components/route/RoutePage'));

const routes = [
    {
        path: '/routes',
        element: <RoutePage />,
        label: 'routes',
        icon: <NearMeIcon />,
        mainMenu: true,
        unAuthenticated: true,
    },
    {
        path: '/favorites',
        element: <FavoritePage />,
        label: 'favorites',
        icon: <FavoriteIcon />,
        mainMenu: true,
    },
    {
        path: '/add-route',
        element: <AddRoutePage />,
        label: 'add route',
        icon: <AddAPhotoIcon />,
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
];

export default routes;
