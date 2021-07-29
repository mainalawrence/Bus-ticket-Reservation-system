import React,{useState,useEffect} from 'react'
import axios from '../axios';
const VehicleModel = ({ name, arrive,Bookings, depart}) => ( 
    <tr >
        <td>{name}</td>
        <td>{arrive}</td>
        <td>{depart}</td>
        <td style={{ borderRadius: '50%', width: '4%', background: 'green',cursor:'pointer' }}
            onClick={() =>{Bookings(name,depart)}}>Book</td>
    </tr>
)
export default function DestinationDetails({ state,prev,Bookings }) {
    const [vlist, setVlist] = useState([])

    useEffect(() => {
        document.title="Select buse"
        axios.post(`/destination/`,
            {
                "_date":state.date,
               "location":state.destination
            }
          )
            .then((res) => {
                setVlist([...res.data]);
            })
            .catch(err => {
            console.log(err.message);
        })
    }, [])
    return (
        <div  style={{marginBottom:'15%'}} className="container  d-flex flex-column align-items-center justify-content-center">
            <div>
                <h4><i>the buses available</i></h4>
            </div>
            <div className="my-2">
                Date: {state.date}
            </div>
            <div style={{width:'80%',height:'50%'}} className="card">
            <div className="container mt-4 col-12">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Arrive Time </th>
                            <th>Depart Time</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                vlist.map((item) => {
                                    return <VehicleModel key={item.id} Bookings={Bookings} name={item.name} arrive={item.arrival} depart = {item.depart}/>
                                })
                           }
                        </tbody>
                </table>
                </div> 
                <div className="container mt-5 col-1">
                <input type="submit" onClick={prev} value="back" className="btn btn-success "/>
            </div>
            </div>         
        </div>
    )
}
