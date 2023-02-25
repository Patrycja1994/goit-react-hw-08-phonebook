import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name} !! </p>
      <button
        type="button"
        className={css.buttonWrapper}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};