import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewOne = () => {
  const { id } = useParams();
  const [roads, setRoads] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8070/routesInfo/get/${id}`)
      .then((res) => {
        setRoads(res.data.road); // Assuming the response contains 'road' property
        console.log(roads);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (

    <div className='main-body'>
      <div className='center-body'>
        <div className='center-body-head'>
          
        <h1 small>{roads.relatedroute} Route</h1>
        </div>

        <div className='body-middle'>

        <h3>General Informaion</h3>
        <hr/>
        

          <div className='sec1'>

          <dl class="row">
          <dt class="col-sm-2">Route Name</dt>
          <dd class="col-sm-9">{roads.relatedroute}</dd>

          <dt class="col-sm-2">Route Number</dt>
          <dd class="col-sm-9">{roads.roadeNumber}</dd>

          <dt class="col-sm-2">Vehicle Type</dt>
          <dd class="col-sm-9">{roads.vehicleType}</dd>

          <dt class="col-sm-2">Vehicle Number</dt>
          <dd class="col-sm-9">{roads.vehicleNumber}</dd>

          <dt class="col-sm-2">Tour Spend Time</dt>
          <dd class="col-sm-9">{roads.travelTime}</dd>

          <dt class="col-sm-2">Arrival Time</dt>
          <dd class="col-sm-9">{roads.startEnd}</dd>

          </dl>

          <h3>Arrival Times For Main Cities</h3>
          <hr/>

          <dl class="row">

          <dt class="col-sm-3">Main City</dt>
          <dd class="col-sm-9">
            <dl class="row">
              <dt class="col-sm-4">Target Arrival Time</dt>
            </dl>
          </dd>

          <dd class="col-sm-3">{roads.city1}</dd>
          <dd class="col-sm-9">{roads.arrive1}</dd>

          <dd class="col-sm-3">{roads.city2}</dd>
          <dd class="col-sm-9">{roads.arrive2}</dd>

          <dd class="col-sm-3">{roads.city3}</dd>
          <dd class="col-sm-9">{roads.arrive3}</dd>

          <dd class="col-sm-3">{roads.city4}</dd>
          <dd class="col-sm-9">{roads.arrive4}</dd>

          <dd class="col-sm-3">{roads.city5}</dd>
          <dd class="col-sm-9">{roads.arrive5}</dd>

          </dl>

          </div>
          &nbsp;

          <button type="button" className="btn btn-primary" ><a href='/' style={{textDecoration:'none',color:'white'}}>Previous Page</a></button>

        </div>

        &nbsp;
        &nbsp;



      </div>

    </div>
  );
};

export default ViewOne;
