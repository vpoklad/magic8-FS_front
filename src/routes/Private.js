import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getToken, getUser } from '../redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const token = useSelector(getToken);
  const mail = useSelector(getUser);

  return token && mail ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
