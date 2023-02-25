import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictRoute';
import { getCurrentUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Layout } from 'components/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/LogIn/LogIn'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route
          path="/goit-react-hw-08-phonebook/register"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<RegisterPage />}
            />
          }
        ></Route>
        <Route
          path="/goit-react-hw-08-phonebook/login"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<Login />}
            />
          }
        ></Route>
        <Route
          path="/goit-react-hw-08-phonebook/contacts"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook/login"
              component={<ContactsPage />}
            />
          }
        ></Route>
      </Route>
    </Routes>
  );
};
