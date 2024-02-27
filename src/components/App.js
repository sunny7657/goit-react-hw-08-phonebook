import { useDispatch } from 'react-redux';
import AppRoutes from './AppRoutes';
import { useEffect } from 'react';
import { current } from '../redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
