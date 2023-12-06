import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const NavButton = ({ to, label }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={`text-${location.pathname === to ? 'cyan-900' : 'gray-400'}`}
    >
      {label}
    </Link>
  );
};

export default NavButton;
