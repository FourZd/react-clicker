import { NavbarBrand } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { moneySelector } from '../store/reducers/values/moneySlice'
import './Sidebar.css'
import OpenShop from './shop/OpenShop'

export default function Sidebar(){
     return (
          <nav className="sidebar">
               <NavbarBrand>
                    <h1 className='title'>Political Influencer Simulator</h1>
               </NavbarBrand>
               <section className='sidebar-components'>
                    <ul className='value-icons'>
                         <li>
                              <img src='./img/Value.png' /> {useSelector(moneySelector)}
                         </li>
                         <li>
                              <img src='./img/Value.png' /> Chaotic
                         </li>
                    </ul>
                    <ul className='menu-icons'>
                         <li>
                              <OpenShop />
                         </li>
                         <li>
                              <img src='./img/Shop.png' alt='upgrades' /> 
                         </li>
                    </ul>
               </section>
          </nav>
    )
}
