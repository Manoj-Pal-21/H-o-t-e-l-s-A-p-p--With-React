import React, { Component } from "react";
import BookingDisplay from './bookingDisplay';
import axios from 'axios';

const url ="http://localhost:8000/data";

class Booking extends Component{
    constructor(){
        super()

        this.state = {
            booking:''
        }
    }

    render(){
        return(
            <div className="container">
                <BookingDisplay bookdata={this.state.booking}/>
            </div>
        )
    }

    async componentDidMount(){
        const response = await axios.get(url);
        this.setState({booking:response.data})
    }
}

export default Booking;