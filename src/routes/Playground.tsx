import { Link, Outlet } from 'react-router';

const Playground = () => {
  return (
    <>
      <header>
        <span>Playground</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/playground/calculator">Calculator</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Playground;
