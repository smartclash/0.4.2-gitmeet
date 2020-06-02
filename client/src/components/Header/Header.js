import React from "react";
import "./Header.css";
import { ButtonDropdown, Avatar } from '@zeit-ui/react'

function Header() {
  const url = 'https://zeit.co/api/www/avatar/?u=evilrabbit&s=160';
  return (
    <div>
      <header className="header">
        
        <a href="" className="logo">
        Logo
        </a>
        
        <ul className="menu">
          <li>
            <ButtonDropdown>
                <ButtonDropdown.Item main><Avatar src={url}/></ButtonDropdown.Item>
                <ButtonDropdown.Item>Add a project</ButtonDropdown.Item>
                <ButtonDropdown.Item>Settings</ButtonDropdown.Item>
            </ButtonDropdown>
          </li>
        </ul>

      </header>
    </div>
  );
}
export default Header;