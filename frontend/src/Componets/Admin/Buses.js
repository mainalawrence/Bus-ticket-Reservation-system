
import React, { useEffect, useState } from 'react'
import './style.css';
import axios from '../../axios'

const BuseComponent = ({  name , location,sits }) => ( 
    <tr>
        <td>{name}</td>
        <td>{location}</td>
        <td>{sits}</td>
    </tr>
)

export default function Buses() {

//handle tables
    const [Datelist, setDatelist] = useState([])

    //handle the form
    const [location, setlocation] = useState('')
    const [sits, setsits] = useState(null)
    const [Busname, setBusname] = useState('')
    const [locationsites, setlocationsites] = useState('')
    useEffect(() => {
        document.title = 'Buses'
        axios.get("/destination/buses")
            .then((res) => {
                setDatelist([...res.data]);
            })
             .catch()
    }, [])


    const submit = (e) => {
        e.preventDefault();
     axios.post('/destination/buses', {
       "location":location.toString(), "sits":sits.toString() ,"busname":Busname.toString()
     })
         .then(res => {
             console.log(res.data);
             setBusname('')
             setlocation('')
             setsits('')
     })
}
    const submitlocation = (e) => {
        e.preventDefault();
        axios.post('/destination/locations', {
          "location":locationsites
        })
            .then(res => {
                setlocationsites('')
            })
        .catch(err=>console.log(err))
}
    const HandleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'location') setlocation(value);
        if (name === 'sits') setsits(value);
        if (name === 'busname') setBusname(value)
        if(name==='addLocation') setlocationsites(value)
    }
    return (
        <div style={{paddingTop:'1%',paddingBottom:'5%'}} className='container-fluid d-flex'>
            <div className=' h-leftside container'>
            <table className='table'>
                    <thead>
                        <tr>
                            <th>Bus Name</th>
                            <th>Location</th>
                            <th>Buse Sits</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                Datelist.map((item) => {
                                    return <BuseComponent key={item.id} name={item.name} location={item.location} sits={item.sits.length}/>
                                })
                           }
                        </tbody>
                </table>
            </div>
            <div  className="h-rightside container card">
                <div className="container-fluid ">
                    <div className='py-4 align-items-center container'>
                        <div  className="form-group">
                                <label className="control-label">Add Location Name</label>
                                <input name="addLocation" value={locationsites}  type='text' onChange={HandleChange}  className="form-control  col-8" placeholder="Enter Name Please"/>
                            
                        </div>
                        <div className="form-group col-5">
                                <input type="submit" onClick={submitlocation} value="Submit" className="btn btn-success"/>
                            </div>
                   </div>
                    <hr/>
                    <form className="form d-flex py-3 flex-column align-items-center">
                         <div className="form-group container col-8 align-items-center">
                            <label className="control-label">Bus Name</label>
                            <input name="busname"  type='text' onChange={HandleChange}  className="form-control  col-8" placeholder="Enter Name Please"/>
                        </div>
                        <div className="form-group container col-8 align-items-center">
                            <label className="control-label">Location</label>
                            <input name="location"  type='text' onChange={HandleChange}  className="form-control  col-8" placeholder="Enter Name Please"/>
                        </div>
                        <div className="form-group container col-8 align-items-center">
                            <label className="control-label">No of sits</label>
                            <input name="sits"  type='number' onChange={HandleChange}  className="form-control  col-8" placeholder="Enter Name Please"/>
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
