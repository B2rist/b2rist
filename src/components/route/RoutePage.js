import React, { useEffect, useState } from "react";
import AppHeader from "components/header/AppHeader";
import RouteCard from "components/route/RouteCard";
import { getRoutes, selectRouteList } from "services/routeSlice";
import { useDispatch, useSelector } from "react-redux";

const RoutePage = () => {
  const [page] = useState({ id: 0 });
  const dispatch = useDispatch();
  const routes = useSelector((state) => selectRouteList(state));
  useEffect(() => {
    dispatch(getRoutes(page));
  }, [dispatch, page]);
  return (
    <div>
      <AppHeader text="Routes" />
      <div style={{ textAlign: "center" }}>
        {routes.map((route) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(RoutePage);
