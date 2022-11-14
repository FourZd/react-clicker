import 'bootstrap/dist/css/bootstrap.min.css';
import ShowValues from "./components/statistics/ShowValues";
import React, { Fragment } from "react";
import ShopAssortment from './components/shop/ShopAssortment';
import ActivitiesList from './components/activities/ActivitiesList';
import './App.css'
import './main.css'

function App() {
    return (
        <Fragment>
            <ShowValues />
            <main>
                <article className='main-block'>
                    <section className='activities'>
                        <ActivitiesList />
                    </section>
                    
                    <section className='shop'>
                        <ShopAssortment />
                    </section>

                </article>
            </main>
        </Fragment>
    );
}

export default App;
