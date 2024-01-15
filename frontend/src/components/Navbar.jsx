import "./Navbar.css";

//components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

//hooks
import { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//redux
import { logout, reset } from "./slices/authSlice";

const Navbar = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const [query, setQuery] = useState('')

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())

    navigate('/login')
  }

  const handleSearch = (e) => {
    e.preventDefault();

    if(query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <nav id="nav">
      <Link to="/">ReactGram</Link>

      <form id="search-form" onSubmit={handleSearch}>
        <BsSearch />
        <input type="text" placeholder="Pesquisar" onChange={(e) => setQuery(e.target.value)}value={query}/>
      </form>

      <ul id="nav-links">
        {auth ? (
          <>
            <li title="Home">
              <NavLink to="/">
                <BsHouseDoorFill />
              </NavLink>
            </li>
            {user && (
              <li title="Postar uma foto">
                <NavLink to={`/users/${user._id}`}>
                  <BsFillCameraFill />
                </NavLink>
              </li>
            )}
            <li title="Perfil do Usuário">
              <NavLink to="/profile">
                <BsFillPersonFill />
              </NavLink>
            </li>
            <li title="Sair">
              <span onClick={handleLogout}>
                <MdOutlineLogout />
              </span>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Registrar</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
