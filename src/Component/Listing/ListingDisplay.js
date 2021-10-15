import React from 'react';
import { Link } from 'react-router-dom';
import './Listing.css';
// import Listing from './Listingapi';

const ListingDisplay = (props) => {
    const renderList = ({ hotellist }) => {
        if (hotellist) {
            if (hotellist.length > 0) {
                return hotellist.map((item) => {
                    return (
                        <div className="item" id={item.id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img className="Image" src={item.thumb} />
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details/${item._id}`}>{item.name}</Link></div>
                                    <div className="city-name"><h3>{item.city_name}</h3></div>
                                    <div className="address-text"><h3>{item.locality}</h3></div>
                                    <div className="address-text">{item.address}</div>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="CUISTNES-COST-FOR-TWO">ROOM TYPE</div>
                                    <div class="CUISTNES-COST-FOR-TWO">COST FOR NIGHT</div>
                                </div>
                                <div class="col-md-3">
                                    <div class="Bakery-700">
                                        {item.type[0].name},{item.type[1].name},{item.type[2].name}</div>
                                    <div class="Bakery-700">{item.cost}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            } else {
                return (
                    <div>
                        <h2>NO DATA FOUND</h2>
                    </div>
                )
            }

        } else {
            return (
                <div>
                    <img src="/images/loader.gif" alt="Fuck" />
                </div>
            )
        }
    }
    return (
        <div className="container_fluid">
            <div className="main-heading">
                <div className="row">
                    <div className="col-md-12">
                        {renderList(props)}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ListingDisplay;