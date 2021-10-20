import React, { Component } from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const url = "https://developerfunnel.herokuapp.com/location"
const hotelurl = "https://developerfunnel.herokuapp.com/hotels?city="
class Search extends Component {
    constructor() {
        super()

        this.state = {
            location: '',
            hotels: ''
        }
    }

    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }
    handleChangeCity = (event) => {
        console.log(event.target.value)
        const cityid = event.target.value
        fetch(`${hotelurl}${cityid}`, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ hotels: data })
            })
    }
    renderHotels = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item._id}>
                        {item.name}|{item.locality}
                    </option>
                )
            })
        }

    }
    handleHotels = (event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    render() {
        return (
            <div className="imagecontainer">
                <div className='heading'>
                    Plan Trip For Us
                </div>
                <div className='locationSelector'>
                    <select className='locationDropDown' onChange={this.handleChangeCity}>
                        <option>-------- SELECT LOCATION --------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className='Reataurantsinput' onChange={this.handleHotels}>
                        <option>----------- SELECT HOTEL -----------</option>
                        {this.renderHotels(this.state.hotels)}
                    </select>

                </div>

            </div>

        )

    }
    componentDidMount() {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ location: data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export default withRouter(Search);

