import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { isUserLogIn } from '../redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(isUserLogIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
