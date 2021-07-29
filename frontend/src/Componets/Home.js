import React, { useEffect } from 'react'

export default function Home({ next, HandleChange, state }) {
    useEffect(() => {
        document.title="home"
    }, [])
    return (
        <div style={{paddingBottom:'15%'}} className='d-flex my-5 justify-content-center  flex-column align-items-center'>
            <div>
                <h3>welcome to 2Nk online sit booking</h3>
            </div>
            <div className="container pt-2 my-4">
                <form className="form d-flex justify-content-center  flex-column align-items-center">
                <div className="form-group container col-5 align-items-center">
                        <label className="control-label">Name</label>
                        <input name="name" value={state.name} type='text' onChange={HandleChange}  className="form-control  col-8" placeholder="Enter Name Please"/>
                    </div>
                    <div className="form-group container col-5 align-items-center">
                        <label className="control-label">Phone Number</label>
                        <input name="pnumber" value={state.pnumber} type='number' onChange={HandleChange}  className="form-control  col-8" placeholder="Enter Name Please"/>
                    </div>
                    <div className="form-group col-5">
                            <input type="submit" onClick={next} value="Submit" className="btn btn-success"/>
                        </div>
                </form>
            </div>
        </div>
    )
}
