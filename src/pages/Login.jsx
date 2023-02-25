import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <>
      <Helmet>
        <h2>Login</h2>
      </Helmet>
      <LoginForm />
    </>
  );
}
