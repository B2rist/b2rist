import React, { Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import routes from "routes";
import Preloader from "components/root/Preloader";
import ProtectedActionRoute from "components/root/ProtectedActionRoute";
import Main from "components/main/Main";
import HistoryRouter from "components/root/HistoryRouter";
import history from "browserHistory";

const convertRoutes = (routeList) =>
  routeList.map((route) => ({
    path: route.path,
    element: (
      <Suspense fallback={<Preloader loading />}>
        {route.path ? <ProtectedActionRoute route={route} /> : route.element}
      </Suspense>
    ),
    ...(route.children ? { children: convertRoutes(route.children) } : {}),
  }));

const convertedRoutes = [
  ...convertRoutes(routes.filter((route) => route.fullScreen)),
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    element: <Main />,
    children: [...convertRoutes(routes.filter((route) => !route.fullScreen))],
  },
];

const AppRoutes = () => useRoutes(convertedRoutes);

const AppRouter = () => (
  <HistoryRouter history={history}>
    <AppRoutes />
  </HistoryRouter>
);

export default AppRouter;
