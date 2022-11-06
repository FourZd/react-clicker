import 'bootstrap/dist/css/bootstrap.min.css';
import ShowValues from "./components/statistics/ShowValues";
import React, { Fragment } from "react";
import PublicateButton from "./components/activities/PublicateButton";
import ShopAssortment from './components/shop/ShopAssortment';

function App() {
  return (
    <Fragment>
        <ShowValues />
        <main>
            <PublicateButton />
            <ShopAssortment />
        </main>
    </Fragment>
  );
}

export default App;
