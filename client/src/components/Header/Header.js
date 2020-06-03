import React from "react";
import "./Header.css";
import { Avatar } from '@zeit-ui/react';


function Header() {
  
  const url = 'https://zeit.co/api/www/avatar/?u=evilrabbit&s=160';//test profilepic

  let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler');
  let dropdownIsOpen = false;

  // Handle dropdown menues
  if (dropdowns.length) {
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', (event) => {
        let target = document.querySelector('#' + event.target.dataset.dropdown)

        if (target) {
          if (target.classList.contains('show')) {
            target.classList.remove('show');
            dropdownIsOpen = false;
          } else {
            target.classList.add('show');
            dropdownIsOpen = true;
          }
        }
      })
    })
  }

  // Handle closing dropdowns if a user clicked the body
  window.addEventListener('mouseup', (event) => {
    if (dropdownIsOpen) {
      dropdowns.forEach((dropdownButton) => {
        let dropdown = document.querySelector('#' + dropdownButton.dataset.dropdown);
        let targetIsDropdown = dropdown == event.target;

        if (dropdownButton == event.target) {
          return;
        }

        if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
          dropdown.classList.remove('show');
        }
      });
    }
  });

  // Open links in mobiles
  function handleSmallScreens() {
    document.querySelector('.navbar-toggler')
      .addEventListener('click', () => {
      let navbarMenu = document.querySelector('.navbar-menu')

      if (navbarMenu.style.display === 'flex') {
        navbarMenu.style.display = 'none';
        return;
      }

      navbarMenu.style.display = 'flex';
    });
  }

  handleSmallScreens();

  return (
    <div>
      <nav class="navbar">
        <div class="container">
      
          <div class="navbar-header">
            <button class="navbar-toggler" data-toggle="open-navbar1">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a href="#">
              <h4>Git<span>Meet!</span></h4>
            </a>    
          </div>
      
          <div class="navbar-menu" id="open-navbar1">
            <ul class="navbar-nav">
              <li class="navbar-dropdown">
                <a href="#" class="dropdown-toggler" data-dropdown="my-dropdown-id">
                <Avatar src={url}/>
                </a>
                <ul class="dropdown" id="my-dropdown-id">
                  <li><a href="#">Add a Project</a></li>
                  <li class="separator"></li>
                  <li><a href="#">Settings</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;