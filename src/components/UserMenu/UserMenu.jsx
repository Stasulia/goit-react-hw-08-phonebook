import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { profileSelector } from 'store/auth/selectors';
import { logOutThunk } from 'store/auth/thunk';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const profile = useSelector(profileSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOutThunk());
    navigate('');
  };
  return (
    <div className={css.nav}>
      <p className={css.text}>{profile.name}</p>
      <button className={css.btnLogout} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
