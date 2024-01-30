import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
//import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
//import { profileSelector } from 'store/auth/selectors';

const Layout = () => {
  // const profile = useSelector(profileSelector);

  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
