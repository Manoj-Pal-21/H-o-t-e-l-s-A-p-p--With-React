import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = "";

class PlaceBooking extends Component {
    constructor() {
        super()

        this.state = {
            order_id: Math.floor(Math.random() * 10000),
            hotelname: sessionStorage.getItem('hotelname'),
            name: '',
            phone: ''
        }
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Booking for Hotel {this.state.hotelname}</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Order_Id</label>
                            <input type="text" name="order_id" value={this.state.order_id} readOnly className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Hotel_Name</label>
                            <input type="text" name="order_id" value={this.state.hotelname} readOnly className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" name="order_id" value={this.state.name} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Phone</label>
                            <input type="text" name="order_id" value={this.state.phone} className="form-control" />
                        </div>
                        <Link to="/" className="btn btn-danger">Cancel</Link> &nbsp;
                        <button className="btn btn-success">Submit</button>
                    </div>

                </div>

            </div>


        )
    }
}
export default PlaceBooking;
