import React, { useState } from 'react';
import AppHeader from 'components/header/AppHeader';
import RouteCard from 'components/route/RouteCard';
import useFetch from 'services/useFetch';
import { getRoutes } from 'services/firebaseCallFunctions';

const RoutePage = () => {
  const [page] = useState({ id: 0 });
  const { data: routes } = useFetch(getRoutes, page, []);
  return (
    <div>
      <AppHeader text="Routes" />
      <div style={{ textAlign: 'center' }}>
        {routes.map((route) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </div>
  );
};

export default RoutePage;
