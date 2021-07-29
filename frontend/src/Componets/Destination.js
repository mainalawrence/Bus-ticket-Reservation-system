import React,{useState,useEffect} from 'react'
import axios from '../axios'
export default function Destination({ next, prev, state, HandleChange }) {
    const [destination, setdestination] = useState([])

    useEffect(() => {
        document.title = "buses";
        axios.get(`/destination/locations`)
            .then((res) => {
                let dest = [...new Set(res.data)]
                setdestination(dest)
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])
    const Dateselected = () => {
    if (state.date === null) {
        return (
            <>
                <div className='container'>
                    <h5 style={{textAlign:'center'}}className='text-primary'>^^</h5>
                    <p className="text-danger">please select date</p>

                </div>
            </>
        )
    }
    else {
        return (<></>)
    }
}
    return (
        <div  style={{marginBottom:'15%'}}  className="container mt-5 d-flex flex-column align-items-center justify-content-center">
            <div className="mb-4">
                <h4><b>{state.name}</b><i>  Please  select the destination </i></h4>
            </div>
            <div className="form-group">
                <input type="date" name='date' value={state.date} onChange={HandleChange} className="form-control"/>
            </div>
            <div>
                 {
                Dateselected()
            }
           </div>
            <div className='col-9 py-5 container bg-light d-flex flex-column align-items-center justify-content-center'>
                {
                  destination.map((item) => {
                      return (
                       <button key={item.id} name="destination" value={item._location} onClick={next} className="card col-5 mb-3">
                  {item._location}
                </button>   
                    )
                                })  
                }
            <div className="container mt-5 col-1">
                <input type="submit" onClick={prev} value="back" className="btn btn-success "/>
            </div>
            </div>
        </div>
    )
}
