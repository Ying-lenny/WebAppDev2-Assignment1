import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>

          <Dropdown as={ButtonGroup}>
          <Button as={Link} to="/" variant="success">Movies</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/movies/favorites">Favorites</Dropdown.Item>
            <Dropdown.Item as={Link} to="/movies/wishlist">Wishlist</Dropdown.Item>
            <Dropdown.Item as={Link} to="/movies/upcoming">Upcoming</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown as={ButtonGroup}>
          <Button as={Link} to="/person/popular" variant="success">People</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/person/popular">Popular</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

          <li className="nav-item">
                  <Link className="nav-link text-white" to="/person/popular">
                    Popular
                  </Link>
              </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;