import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getToken } from '../redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const token = useSelector(getToken);
  return token ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
