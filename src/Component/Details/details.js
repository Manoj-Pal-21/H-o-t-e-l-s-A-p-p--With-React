import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
};

class HotelDetails extends Component {
    constructor() {
        super()

        this.state = {
            hotel: '',
            tripid: sessionStorage.getItem('tripid')
        }
    }
    render() {
        sessionStorage.setItem('hotelname', this.state.hotel.name)
        let { hotel } = this.state
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-md-11">
                                <h3>{hotel.name}</h3>
                            </div>
                            <div className="col-md-1">
                                <Link to={`/list/${this.state.tripid}`} className="btn btn-danger">Back</Link>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <Slider {...settings}>
                                    <div>
                                        <img src={hotel.thumb} className="img-responsive" alt=""
                                            style={{ width: 1500, height: 400 }} />
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/5nKNcz1/pride.jpg" className="img-responsive" alt=""
                                            style={{ width: 1500, height: 400 }} />
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/QD1RRBk/piccadily.jpg" className="img-responsive" alt=""
                                            style={{ width: 1500, height: 400 }} />
                                    </div>
                                </Slider>
                            </div>
                            <h2>{hotel.name}</h2>
                        </div>
                        <div>
                            <div>
                                <Tabs>
                                    <TabList>
                                        <Tab>Address</Tab>
                                        <Tab>Cost</Tab>
                                        <Tab>Animation</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <h2>{hotel.locality}</h2>
                                        <h2>{hotel.address}</h2>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2>Rs. {hotel.cost}</h2>
                                    </TabPanel>
                                    <TabPanel>
                                        <h3>
                                            <span className="glyphicon glyphicon-road"></span>Parking<br />
                                            <span className="glyphicon glyphicon-fire"></span>Bone Fire<br />
                                        </h3>
                                    </TabPanel>
                                </Tabs>
                            </div>
                            <div>
                                <Link to={`/booking/${hotel._id}`} className="btn btn-success">Place Booking</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        var hotelid = this.props.match.params.id;
        const response = await axios.get(`${url}/${hotelid}`)
        this.setState({ hotel: response.data[0] })

    }
}
export default HotelDetails;