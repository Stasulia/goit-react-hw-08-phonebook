import { useDispatch } from 'react-redux';
import css from './FormRegistration.module.css';

const FormRegistration = ({ register }) => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    //  const form = e.currentTarget;
    const { name, email, password } = e.target.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    // form.reset();
  };
  return (
    <div
      className={css.container}
      // style={{ width: 450 }}
    >
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input className={css.input} type="text" name="name" required />
        </label>

        <label className={css.label}>
          Email address
          <input className={css.input} type="email" name="email" required />
        </label>

        <label className={css.label}>
          Password
          <input
            className={css.input}
            name="password"
            type="password"
            required
          />
        </label>

        <button type="submit" className={css.regBtn}>
          Registration
        </button>
        {/* <Link to="/login">Login</Link> */}
      </form>
    </div>
  );
};

export default FormRegistration;
