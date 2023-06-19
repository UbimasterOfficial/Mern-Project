import React, { useState } from 'react';
import './editone.css';
import axios from 'axios';

export default function EditOne() {
  const [vehicleType, setVtype] = useState("");
  const [vehicleNumber, setVnumber] = useState("");
  const [roadeNumber, setRnumber] = useState("");
  const [relatedroute, setRroute] = useState("");
  const [travelTime, setTtime] = useState("");
  const [startEnd, setTse] = useState("");
  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");
  const [city3, setCity3] = useState("");
  const [city4, setCity4] = useState("");
  const [city5, setCity5] = useState("");
  const [arrive1, settime1] = useState("");
  const [arrive2, settime2] = useState("");
  const [arrive3, settime3] = useState("");
  const [arrive4, settime4] = useState("");
  const [arrive5, settime5] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newRouteAdd = {
      vehicleType,
      vehicleNumber,
      roadeNumber,
      relatedroute,
      travelTime,
      startEnd,
      city1,
      city2,
      city3,
      city4,
      city5,
      arrive1,
      arrive2,
      arrive3,
      arrive4,
      arrive5
    };

    axios.get(`http://localhost:8070/routesInfo/update`, newRouteAdd)  ///${id}
      .then(() => {
        // Handle success
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className='main-body'>
      <div className='center-body'>
        <div className='center-body-head'>
          <h1>Update Route Information</h1>
        </div>
        <div className='body-middle'>
          <form onSubmit={sendData}>
            <div className="form-group row" style={{ marginBottom: "12px" }}>
              <label htmlFor="vehicletype" className="col-sm-2 col-form-label">Vehicle Type</label>
              <div className="col-sm-10">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="vehicletype"
                  placeholder="No Data Available"
                  onChange={(e) => {
                    setVtype(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row" style={{ marginBottom: "12px" }}>
              <label htmlFor="vehiclenumber" className="col-sm-2 col-form-label">Vehicle Number</label>
              <div className="col-sm-10">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="vehiclenumber"
                  placeholder="No Data Available"
                  onChange={(e) => {
                    setVnumber(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row" style={{ marginBottom: "12px" }}>
              <label htmlFor="routenumber" className="col-sm-2 col-form-label">Route Number</label>
              <div className="col-sm-10">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="routenumber"
                  placeholder="No Data Available"
                  onChange={(e) => {
                    setRnumber(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row" style={{ marginBottom: "12px" }}>
              <label htmlFor="relatedroute" className="col-sm-2 col-form-label">Related Route</label>
              <div className="col-sm-10">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="relatedroute"
                  placeholder="No Data Available"
                  onChange={(e) => {
                    setRroute(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row" style={{ marginBottom: "12px" }}>
              <label htmlFor="traveltime" className="col-sm-2 col-form-label">Travel Time</label>
              <div className="col-sm-10">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="traveltime"
                  placeholder="No Data Available"
                  onChange={(e) => {
                    setTtime(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row" style={{ marginBottom: "12px" }}>
              <label htmlFor="travelse" className="col-sm-2 col-form-label">Travel Start & End Time</label>
              <div className="col-sm-10">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="travelse"
                  placeholder="No Data Available"
                  onChange={(e) => {
                    setTse(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className='under-body' style={{ marginTop: "18px" }}>
              <h3>Add Main Cities And Arrival Times</h3>
            </div>

            <div className='body-timesec'>
              <div className="form-row">
                <div className="col-6" style={{ float: "left", marginRight: "150px" }}>
                  <label htmlFor="inputcity" className="col-sm-2 col-form-label">Main City 1</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="City (required)"
                    onChange={(e) => {
                      setCity1(e.target.value);
                    }}
                  />
                </div>

                <div className="col-3" style={{ float: "left" }}>
                  <label htmlFor="inputtim" className="col-sm-2 col-form-label">Time</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Time (required)"
                    onChange={(e) => {
                      settime1(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-6" style={{ float: "left", marginRight: "150px", marginTop: "18px" }}>
                  <label htmlFor="inputcity" className="col-sm-2 col-form-label">Main City 2</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="City (required)"
                    onChange={(e) => {
                      setCity2(e.target.value);
                    }}
                  />
                </div>

                <div className="col-3" style={{ float: "left", marginTop: "18px" }}>
                  <label htmlFor="inputtim" className="col-sm-2 col-form-label">Time</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Time (required)"
                    onChange={(e) => {
                      settime2(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-6" style={{ float: "left", marginRight: "150px", marginTop: "18px" }}>
                  <label htmlFor="inputcity" className="col-sm-2 col-form-label">Main City 3</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City (optional)"
                    onChange={(e) => {
                      setCity3(e.target.value);
                    }}
                  />
                </div>

                <div className="col-3" style={{ float: "left", marginTop: "18px" }}>
                  <label htmlFor="inputtim" className="col-sm-2 col-form-label">Time</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Time (optional)"
                    onChange={(e) => {
                      settime3(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-6" style={{ float: "left", marginRight: "150px", marginTop: "18px" }}>
                  <label htmlFor="inputcity" className="col-sm-2 col-form-label">Main City 4</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City (optional)"
                    onChange={(e) => {
                      setCity4(e.target.value);
                    }}
                  />
                </div>

                <div className="col-3" style={{ float: "left", marginTop: "18px" }}>
                  <label htmlFor="inputtim" className="col-sm-2 col-form-label">Time</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Time (optional)"
                    onChange={(e) => {
                      settime4(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-6" style={{ float: "left", marginRight: "150px", marginTop: "18px" }}>
                  <label htmlFor="inputcity" className="col-sm-2 col-form-label">Main City 5</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City (optional)"
                    onChange={(e) => {
                      setCity5(e.target.value);
                    }}
                  />
                </div>

                <div className="col-3" style={{ float: "left", marginTop: "18px" }}>
                  <label htmlFor="inputtim" className="col-sm-2 col-form-label">Time</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Time (optional)"
                    onChange={(e) => {
                      settime5(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className='body-button'>
              <div className='button_handle'>
                <ul>
                  <li>
                    <button type="submit" className="btn btn-success">Submit</button>
                  </li>
                  <li>
                  <button type="button" className="btn btn-danger"><a href='/' style={{textDecoration:'none',color:'white'}}>Cancel</a></button>   
                  </li>
                </ul>

              </div>
        &nbsp;
        &nbsp;

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
