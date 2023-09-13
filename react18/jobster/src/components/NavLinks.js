import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../utils/link';

const NavLinks = ({handleToggleSidebar}) => {
  return (
    <div className="nav-links">
            {links.length > 0 &&
              links.map((link) => {
                const { text, path, id, icon } = link;
                return (
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    key={id}
                    onClick={handleToggleSidebar}
                  >
                    <span className="icon">{icon}</span>
                    {text}
                  </NavLink>
                );
              })}
          </div>
  );
};

export default NavLinks;