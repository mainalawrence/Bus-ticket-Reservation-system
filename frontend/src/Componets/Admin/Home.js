import React from 'react'
import {Link} from 'react-router-dom';
import './style.css';


const VehicleModel = ({ name, arrive, depart,state }) => ( 
    <tr>
        <td>{name}</td>
        <td>{arrive}</td>
        <td>{depart}</td>
    </tr>
)
const Dates = ({ name, arrive, depart,state }) => ( 
    <tr>
        <td>{name}</td>
        <td>{arrive}</td>
        <td>{depart}</td>
    </tr>
)
const Bookings = ({ name, arrive, depart, state }) => ( 
    <tr>
        <td>{name}</td>
        <td>{arrive}</td>
        <td>{depart}</td>
    </tr>
)

export default function Home() {
    return (
        <div  className="d-flex  flex-column justify-content-center align-items-center">
            <div className="h-nav  container-fluid d-inline-flex align-items-center justify-content-center ">
            <Link className='btn btn-success ml-2' to="/admin/dates">Dates</Link>
            <Link className='btn btn-success ml-2' to="/admin/buses">Buses</Link>
            </div>
            <div className="dash-bord d-flex flex-lg-column">
                <h4>The Number Of Buses in the system: <b className="text-danger">{60}</b></h4><hr/>
                <h4>The Number Of bookings Today : <b className="text-danger">{600}</b></h4>
            </div>
            
            </div>
    )
}
