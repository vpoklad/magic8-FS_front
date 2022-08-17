import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { isUserLogIn } from '../redux/auth/selectors';

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const isLogged = useSelector(isUserLogIn);
  const shouldRedirect = isLogged && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
export default PublicRoute;
