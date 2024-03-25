import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoApp from "../assets/images/logo192.png";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Header = (props) => {
  const { logout, user } = useContext(UserContext);
  const [hideHeader, setHideHeader] = useState(false);

  // useEffect(() => {
  //   if (window.location.pathname === "/login") {
  //     setHideHeader(true);
  //   }
  // }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("Log out success!");
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logoApp}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React logo"
            />

            <span>Manage App</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {((user && user.auth === true) ||
              window.location.pathname === "/" ||
              window.location.pathname === "/users") && (
              <>
                <Nav className="me-auto">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>

                  <NavLink className="nav-link" to="/users">
                    Manage Users
                  </NavLink>
                </Nav>
                <Nav>
                  {user && user.email && (
                    <span className="nav-link">
                      Welcome <b>{user.email}</b>
                    </span>
                  )}
                  <NavDropdown title="Setting">
                    {user && user.auth === true ? (
                      <NavDropdown.Item onClick={() => handleLogout()}>
                        Logout
                      </NavDropdown.Item>
                    ) : (
                      <NavLink className="dropdown-item" to="/login">
                        Login
                      </NavLink>
                    )}
                  </NavDropdown>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
