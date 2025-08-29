import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Loading from './loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <>
  <Loading />
    </> 
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
