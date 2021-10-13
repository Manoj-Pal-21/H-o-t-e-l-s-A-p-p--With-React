import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from "./Home/Home";
import Listingapi from './Listing/Listingapi';
import Details from './Details/details';

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/list/:id" component={Listingapi}/>
                <Route path="/Details/:id" component={Details}/>
                <Footer />
            </div>
        </BrowserRouter>
    )

}

export default Routing;


