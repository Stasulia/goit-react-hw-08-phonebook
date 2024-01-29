import { Suspense, lazy, useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout,jsx/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthSelector, profileSelector } from 'store/auth/selectors';
import { refreshThunk } from 'store/auth/thunk';
import RegistrationPage from 'pages/RegistrationPage';
import LoginPage from 'pages/LoginPage';
import Phonebook from 'pages/Phonebook';
//import PrivateRoute from 'guards/PrivateRoute';
//import PublicRoute from 'guards/PublicRoute';

const Home = lazy(() => import('pages/HomePage'));

export const App = () => {
  const profile = useSelector(profileSelector);
  const token = useSelector(isAuthSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    !profile && token && dispatch(refreshThunk());
  }, [dispatch, profile, token]);

  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // gap: '10px',
        // flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginTop: '10px',
        marginRight: 'auto',
        padding: '16px ',
        width: '800px',
        backgroundColor: '#d6cef1',

        // fontSize: 30,
        // color: '#010101',
      }}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route
              path="/login"
              elements={
                // <PublicRoute>
                <LoginPage />
                // </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                //<PrivateRoute>
                <Phonebook />
                //</PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
};
