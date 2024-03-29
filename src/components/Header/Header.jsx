//import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { profileSelector } from 'store/auth/selectors';
//const { profileSelector } = require('store/auth/selectors');

export const Header = () => {
  const profile = useSelector(profileSelector);
  // const navigate = useNavigate();

  //const dispatch = useDispatch();

  // const handleLogOut = () => {
  //   navigate('/login');
  //   //dispatch(logout());
  // };
  return (
    <div className={css.header}>
      <p>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
      </p>
      {profile ? (
        <UserMenu />
      ) : (
        <>
          <div className={css.reg}>
            <p>
              <NavLink className={css.link} to="/registration">
                Registration
              </NavLink>
            </p>

            <p>
              <NavLink className={css.link} to="/login">
                Login
              </NavLink>
            </p>
          </div>
        </>
      )}
    </div>
  );
};
