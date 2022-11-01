import { registerFunction } from 'firebaseService';
import { routeListFailure, routeListRequest, routeListSuccess } from 'services/actions';
import { useContext, useEffect } from 'react';
import { Context } from 'components/Store';

const routeService = registerFunction('getRoutes');

const useGetRouteList = () => {
  const [, dispatch] = useContext(Context);
  useEffect(() => {
    dispatch(routeListRequest());
    routeService()
      .then(({ data }) => dispatch(routeListSuccess(data)))
      .catch((error) => routeListFailure(error));
  }, [dispatch]);
};

export default useGetRouteList;
