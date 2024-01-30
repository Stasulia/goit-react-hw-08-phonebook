import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="title">Welcome to Phonebook App</h1>

      <button>
        <NavLink className="link" to="/contacts">
          Start
        </NavLink>
      </button>
    </div>
  );
};

export default HomePage;
