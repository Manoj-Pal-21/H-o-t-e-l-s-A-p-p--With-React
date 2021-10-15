import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails/1"

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
                                <Link to="/" className="btn btn-danger">Back</Link>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <Slider {...settings}>
                                    <div>
                                        <img src={hotel.thumb} className="img-responsive"
                                            style={{ width: 1500, height: 400 }} />
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/5nKNcz1/pride.jpg" className="img-responsive"
                                            style={{ width: 1500, height: 400 }} />
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/QD1RRBk/piccadily.jpg" className="img-responsive"
                                            style={{ width: 1500, height: 400 }} />
                                    </div>
                                </Slider>
                            </div>
                            <h2>{hotel.name}</h2>
                        </div>
                        <div>
                            <Tabs>
                                <TabList>
                                    <Tab>Address</Tab>
                                    <Tab>Cost</Tab>
                                </TabList>

                                <TabPanel>
                                    <h2>{hotel.locality}</h2>
                                    <h2>{hotel.address}</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>{hotel.cost}</h2>
                                </TabPanel>
                            </Tabs>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        var tripid = this.props.match.params.id;
        const response = await axios.get(`${url}/${tripid}`)
        this.setState({ hotel: response.data })
    }
}
export default HotelDetails;