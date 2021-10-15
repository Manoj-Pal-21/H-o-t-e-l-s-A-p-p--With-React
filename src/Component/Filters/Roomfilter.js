import React, { Component } from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class RoomFilter extends Component {
    filterlogic = (event) => {
        let roomNumber = event.target.value;
        let tripId = sessionStorage.getItem('tripid');
        let roomurl;
        if (roomNumber == "") {
            roomurl = `${url}/${tripId}`
        } else {
            roomurl = `${url}/${tripId}?roomtype=${roomNumber}`
        }
        axios.get(roomurl)
            .then((response) => { this.props.hotelperRoom(response.data) })

    }
    render() {
        return (
            <React.Fragment>
                <center>Room Filter</center>
                <div onChange={this.filterlogic}>
                    <label className="radio">
                        <input type="radio" value="" name="room" />All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room" />Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room" />Premium Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room" />Travel Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room" />Semi Delux Room
                    </label>
                </div>
            </React.Fragment >
        )
    }
}
export default RoomFilter;
