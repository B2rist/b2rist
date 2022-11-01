import { useContext } from 'react';
import { Context } from 'components/Store';

const useSelector = (scope) => {
  const [state] = useContext(Context);
  return [state[scope]];
};

export default useSelector;
