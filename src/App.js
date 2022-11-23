import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from "react";
import ActivitiesList from './components/activities/ActivitiesList';
import './App.css'
import SideBar from './components/Sidebar';
import Offcanvas from './components/Offcanvas';

function App() {
    return (
        <Fragment>
            <section>
                <Offcanvas />
            </section>
            <nav className="sidebar">
                <SideBar />
            </nav>
            <main canvas>
                <article className='main-block'>
                    <ul className='activities'>
                        <ActivitiesList />
                    </ul>
                </article>
            </main>
        </Fragment>
    );
}

export default App;
