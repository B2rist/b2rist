import React from 'react';
import AppHeader from 'components/header/AppHeader';
import RouteCard from 'components/route/RouteCard';
import useGetRouteList from 'services/useGetRouteList';
import useSelector from 'services/useSelector';

const RoutePage = () => {
  const [{ data: routes }] = useSelector('routeList');
  useGetRouteList();
  return (
    <div>
      <AppHeader text="Routes" />
      <div style={{ textAlign: 'center' }}>
          {routes.map((route) => <RouteCard route={route} />)}
      </div>
    </div>
  );
};

export default RoutePage;
