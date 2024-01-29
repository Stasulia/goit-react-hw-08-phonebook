import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Wellcome to phonebook App</h1>
      <button>
        <NavLink className="link" to="/contacts">
          Start
        </NavLink>
      </button>
    </div>
  );
};

export default Home;
