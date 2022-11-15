import { NavbarBrand } from 'react-bootstrap'
import './Sidebar.css'

export default function Sidebar(){
     return (
          <nav className="sidebar">
               <NavbarBrand>
                    <img className='logo' src='./img/Logo.png' />
               </NavbarBrand>
               <ul>Values
                    <li>Money</li>
                    <li>Chaotic</li>
               </ul>
               <ul>Menu
                    <li>Staff image, name on hover</li>
                    <li>Upgrades image, name on hover</li>
                    <li></li>
               </ul>
          </nav>
    )
}
