import { Link } from 'react-router-dom';
import css from './FormLogin.module.css';
import { useState } from 'react';

export function FormLogin({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    login({
      email: email.value,
      password: password.value,
    });
    e.target.reset();
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.currentTarget.value);
        break;
      case 'password':
        setPassword(event.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>Email address</label>
        <input
          type="email"
          name="email"
          className={css.input}
          value={email}
          onChange={handleChange}
          required
        />

        <label className={css.label}>Password</label>
        <input
          name="password"
          type="password"
          className={css.input}
          value={password}
          onChange={handleChange}
          required
        />

        <button type="submit" className={css.regBtn}>
          Login
        </button>
        <Link className={css.login} to="/registration">
          Registration
        </Link>
      </form>
    </div>
  );
}
