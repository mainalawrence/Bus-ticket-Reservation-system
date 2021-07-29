import React, { useEffect, useState } from 'react'
import './style.css';
import axios from '../../axios'

const DateComponent = ({ date, arrive, depart,busname }) => ( 
    <tr>
        <td>{date}</td>
        <td>{arrive}</td>
        <td>{depart}</td>
        <td>{busname}</td>
    </tr>
)

export default function Dates() {

//handle tables
    const [Datelist, setDatelist] = useState([])

    //handle the form
    const [Date, setDate] = useState('')
    const [Atime, setAtime] = useState('')
    const [Dtime, setDtime] = useState('')
    const [Busname, setBusname] = useState('')
    useEffect(() => {
        document.title = 'Dates'
        axios.get("/destination/dates")
            .then((res) => {
                console.log(res.data);
                setDatelist([...res.data]);
            })
             .catch()
    }, [])


 const submit = (e) => {
     axios.post('/destination/dates', {
       "date":Date, "Arivetime":Atime ,"Departtime":Dtime ,"busname":Busname
   })
}

    const HandleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'date') setDate(value);
        if (name === 'Atime') setAtime(value);
        if (name === 'Dtime') setDtime(value);
        if(name==='busname') setBusname(value)
    }
    return (
        <div style={{paddingTop:'1%',paddingBottom:'5%'}} className='container-fluid d-flex'>
            <div className=' h-leftside container'>
            <table className='table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Arrive Time </th>
                            <th>Depart Time</th>
                            <th>Buse Name</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                Datelist.map((item) => {
                                    return <DateComponent key={item.id} date={item._date} arrive={item.arrival} depart={item.depart} busname={item.buse_id}/>
                                })
                           }
                        </tbody>
                </table>
            </div>
            <div  className="h-rightside container card">
                <div className="container-fluid ">
                    <form className="form d-flex flex-column align-items-center">
                        <div className="form-group container col-8 align-items-center">
                            <label className="control-label">Date</label>
                            <input name="date"  type='date' onChange={HandleChange}  className="form-control  col-8" placeholder="Enter Name Please"/>
                        </div>
                        <div className="form-group container col-8 align-items-center">
                            <label className="control-label">Arrival Time</label>
                            <input name="Atime"  type='text' onChange={HandleChange}  className="form-control  col-8" placeholder="Enter Name Please"/>
                        </div>
                        <div className="form-group container col-8 align-items-center">
                            <label className="control-label">Depart Time</label>
                            <input name="Dtime"  type='text' onChange={HandleChange}  className="form-control  col-8" placeholder="Enter Name Please"/>
                        </div>
                        <div className="form-group container col-8 align-items-center">
                            <label className="control-label">Bus Name</label>
                            <input name="busname"  type='text' onChange={HandleChange}  className="form-control  col-8" placeholder="Enter Name Please"/>
                        </div>
                        <div className="form-group col-5">
                                <input type="submit" onClick={submit} value="Submit" className="btn btn-success"/>
                            </div>
                    </form>
                </div>         
            </div>
        </div>
    )
}
