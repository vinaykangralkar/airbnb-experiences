import logo from "../assests/airbnb-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
    </nav>
  );
};

export default Navbar;
