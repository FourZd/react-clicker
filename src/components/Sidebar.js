import { NavbarBrand } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveMenu } from '../store/reducers/interface/offcanvasSlice'
import { moneySelector } from '../store/reducers/values/moneySlice'
import './Sidebar.css'


export default function Sidebar(){
     const dispatch = useDispatch()

     return (
          <nav>
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
                              <img src='./img/Shop.png' alt='upgrades' onClick={() => {dispatch(changeActiveMenu('shop'))}}/>
                         </li>
                         <li>
                               
                         </li>
                    </ul>
               </section>
          </nav>
    )
}
