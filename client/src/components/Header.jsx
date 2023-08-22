import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-950">
      <nav className="w-[90%] max-w-5xl mx-auto flex justify-between text-white py-4">
        <Link to="/" className="text-xl font-bold">
          MERN
        </Link>
        <ul className="flex items-center gap-16">
          <Link to="/sign-up">Sign up</Link>
          <Link to="/sign-in">Sign in</Link>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
