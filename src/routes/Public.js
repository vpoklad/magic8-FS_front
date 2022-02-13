import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getToken } from '../redux/auth/selectors';

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const token = useSelector(getToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
export default PublicRoute;
