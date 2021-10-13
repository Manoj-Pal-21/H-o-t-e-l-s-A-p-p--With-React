import React from 'react';
import QuickDisplay from './QuickDisplay';

const QuickUrl = 'https://developerfunnel.herokuapp.com/booking'

class QuickSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tripType: ''
        }
    }

    render() {
        return (
            <div className="container">
                <QuickDisplay tripData={this.state.tripType} />
            </div>
        );
    }

    componentDidMount() {
        fetch(QuickUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    tripType: data
                })
            })
    }
};

export default QuickSearch;