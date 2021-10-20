import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from "./Home/Home";
import Listingapi from './Listing/Listingapi';
import Details from './Details/details';
import placeBooking from './Booking/placeBooking';
import Booking from './Booking/viewBooking';

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/list/:id" component={Listingapi}/>
                <Route path="/Details/:id" component={Details}/>
                <Route path="/Booking/:id" component={placeBooking}/>
                <Route path="/viewBooking" component={Booking}/>
                <Footer />
            </div>
        </BrowserRouter>
    )

}

export default Routing;


