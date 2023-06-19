import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

export default class ViewInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roads: []
    };
  }

  //React method- this component execute after other parts
  componentDidMount() {
    this.retrieveRoads();
  }

  retrieveRoads() {
    axios.get("http://localhost:8070/routesInfo/").then((res) => {

    // Get data from 'roads' route
    this.setState({ roads: res.data });
    console.log(this.state.roads)

    }).catch((err) => {
      console.log(err);
    });
  }

  render() {

    return (
      <div className='main-body'>
        <div className='center-body'>

          <div className='center-body-head'>
          <h1>All Route Informaion</h1>
          </div>

          <div className='body-middle'>

            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Route Name</th>
                  <th scope="col">Route No</th>
                  <th scope="col">Vehicle Type</th>
                  <th scope="col">Vehicle No</th>
                  <th scope="col">Spend Time</th>
                  <th scope="col">Arrival Time</th>
                </tr>
              </thead>

              <tbody>
              {this.state.roads.map((roads,index ) =>(

                <tr>
                  <th scope="row">{index+1} </th>
                  <td>
                    <a href={`/spec/${roads._id}`} style={{textDecoration:'none'}}>
                    {roads.relatedroute}
                    </a>
                    
                    </td>
                  <td>{roads.roadeNumber}</td>
                  <td>{roads.vehicleType}</td>
                  <td>{roads.vehicleNumber}</td>
                  <td>{roads.travelTime}</td>
                  <td>{roads.startEnd}</td>

                  <td>
                    <a className="btn btn-warning" href={`/edit/${roads._id}`}>
                      <i className='fas fa-edit'></i> &nbsp; Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href={`/delete/${roads._id}`}>
                      <i className='fas fa-trash-alt'></i> &nbsp; Delete
                    </a>

                  </td>



                </tr>
              ))}
              </tbody>

            </table>

            <button className='btn btn-success'><a href='/add' style={{textDecoration:'none',color:'white'}} >Add New Route</a></button>
          

          </div>
          &nbsp;
            &nbsp;

        </div>

      </div>
    );
  }
}