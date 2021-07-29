import React, { Component } from 'react'
import Home from './Home';
import Destination from './Destination';
import DestinationDetails from './DestinationDetails';
import Success from './Success';
import axios from '../axios'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            step: 1,
            name: '',
            pnumber:'',
            destination: '',
            date:null,
            sitNumber:'',
            paid: '',
            Booking: {
                Location:'',
                CustomerName: '',
                CustomerPhoneNumber: null,
                DepartureTime: null,
                Date:null
            }
        }
    }

    next = (e) => {
    this.setState({
        [e.target.name]:e.target.value,
        step: this.state.step + 1
    })
    }
    Bookings = (buse,DepT) => {
        this.setState({
            Booking: {
                Location: this.state.destination,
                Buse:buse,
                CustomerName:this.state.name,
                CustomerPhoneNumber:this.state.pnumber,
                DepartureTime: DepT,
                Date:this.state.date
        }
        })
        axios.post('/bookings', {
            Location: this.state.Booking.Location,
            CustomerName: this.state.Booking.CustomerName,
            CustomerPhoneNumber: this.state.Booking.CustomerPhoneNumber,
            DepartureTime: this.state.Booking.DepartureTime,
            _Date: this.state.Booking.Date,
            Buse: this.state.Booking.Buse
        })
            .then(() => {
            window.location='/success'
            })
            .catch((err) => {
            console.log(err);
        })
        console.log(this.state.Booking)
}
prev=() => {
        this.setState({step:this.state.step-1})
    }
HandleChange = (e) => {
    this.setState({
         [e.target.name]:e.target.value
    }   
    )
}
    render() {
        const { step } = this.state;

        switch (step) {
            case 1:
                    return (
                        <Home
                            next={this.next}
                            HandleChange={this.HandleChange}
                            state={this.state}
                        />
                    )
               
            case 2:
                return <Destination HandleChange={this.HandleChange} state={this.state} next={this.next} prev={this.prev}/>;
            case 3:
                return <DestinationDetails state={this.state} prev={this.prev} next={this.next} Bookings={this.Bookings}/>        
            case 4:
                return <Success state={this.state}/>
            default:
                break;
        }
    }
}
