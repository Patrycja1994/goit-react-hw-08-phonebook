import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUser, getIsFetchingCurrentUser } from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsFetchingCurrentUser);
  const user = useSelector(getUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};