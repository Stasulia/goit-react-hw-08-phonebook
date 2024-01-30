import { FormLogin } from 'components/FormLogin/FormLogin';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isAuthSelector } from 'store/auth/selectors';
import { loginThunk } from 'store/auth/thunk';
//import { useDispatch } from 'react-redux';
//import { loginThunk } from 'store/auth/thunk';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthSelector);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  const login = body => {
    dispatch(loginThunk(body));
  };
  return (
    <div
    // className="container"
    >
      <title>Login</title>
      <FormLogin login={login} />
    </div>
  );
};

export default LoginPage;
