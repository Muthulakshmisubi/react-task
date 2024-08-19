import React from 'react';
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.css';
function Menu() {
  return (
    <>
    <nav>
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Project</a>
            </li>
        </ul>
    </nav>
    </>
  )
}
export default Menu;
