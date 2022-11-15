import { NavbarBrand } from 'react-bootstrap'
import './Sidebar.css'

export default function Sidebar(){
     return (
          <nav className="sidebar">
               <NavbarBrand>
                    <h1 className='title'>Political Influencer Simulator</h1>
               </NavbarBrand>
               <section className='sidebar-components'>
                    <ul>Values
                         <li>Money</li>
                         <li>Chaotic</li>
                    </ul>
                    <ul>Menu
                         <li>Staff image, name on hover</li>
                         <li>Upgrades image, name on hover</li>
                         <li></li>
                    </ul>
               </section>
          </nav>
    )
}
