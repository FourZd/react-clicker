import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from "react";
import ShopAssortment from './components/shop/ShopAssortment';
import ActivitiesList from './components/activities/ActivitiesList';
import './App.css'
import './main.css'
import SideBar from './components/Sidebar';

function App() {
    return (
        <Fragment>
            <SideBar />
            <main canvas>
                <article className='main-block'>
                    <ul className='activities'>
                        <ActivitiesList />
                    </ul>
                    
                    <section className='shop'>
                        <ShopAssortment />
                    </section>

                </article>
            </main>
        </Fragment>
    );
}

export default App;
