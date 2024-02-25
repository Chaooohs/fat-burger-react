import { Link, NavLink } from "react-router-dom";
import { SiBurgerking } from "react-icons/si";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <SiBurgerking />
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/burgers">Burgers</NavLink>
      </nav>
    </header>
  )
}
