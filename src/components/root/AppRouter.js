import React, { Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import routes from 'routes';
import Preloader from 'components/root/Preloader';
import ProtectedRoute from 'components/root/ProtectedRoute';
import Main from 'components/main/Main';
import HistoryRouter from 'components/root/HistoryRouter';
import history from 'browserHistory';
import LoginPage from 'components/login/LoginPage';

const convertPublicRoutes = (routeList) => routeList.map((route) => ({
    path: route.path,
    element: <Suspense fallback={<Preloader loading />}>{route.element}</Suspense>,
    ...(route.children ? { children: convertPublicRoutes(route.children) } : {}),
  }));

const convertProtectedRoutes = (routeList) => routeList.map((route) => ({
    path: route.path,
    element: (
      <Suspense fallback={<Preloader loading />}>
        {route.path ? <ProtectedRoute route={route} /> : route.element}
      </Suspense>
    ),
    ...(route.children ? { children: convertProtectedRoutes(route.children) } : {}),
  }));

const convertedRoutes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <Navigate to="/routes" replace />,
  },
  {
  element: <Main />,
    children: [
      ...convertPublicRoutes(routes.filter((route) => route.unAuthenticated)),
      ...convertProtectedRoutes(routes.filter((route) => !route.unAuthenticated))],
  },
];

const AppRoutes = () => useRoutes(convertedRoutes);

const AppRouter = () => (
  <HistoryRouter history={history}>
    <AppRoutes />
  </HistoryRouter>
  );

export default AppRouter;
