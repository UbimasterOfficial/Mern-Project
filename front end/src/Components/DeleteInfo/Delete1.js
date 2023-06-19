import React, { useState, useEffect } from 'react'
import './delete01.css'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

export default function Delete1() {


  const [deleteNote,setDnote] = useState("");
  const [adminName,setAname] = useState("");


  function sendData(e){
    e.preventDefault();

    const newDeleteRouteAdd ={

      deleteNote, adminName
    }
    
    axios.post("http://localhost:8070/deleteInfo/add",newDeleteRouteAdd).then(()=>{
      //alert("Route Delete Info Added & Data Delete Successfully")

      
    }).catch((err)=>{
      alert(err)
    })
  }


  const { id } = useParams();
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (deleted) {
      axios.delete(`http://localhost:8070/deleteInfo/delete/${id}`)
        .then((res) => {
          //alert("Route Information Deleted Successfully");
        })
        .catch((err) => {
          console.error(err);
          //alert("Error deleting route information");
        });
    }
  }, [deleted, id]);


  const handleDelete = () => {
    setDeleted(true);
  };


  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowBookDetails_deleteClick');
      });
  };





  return (


    <div className='main-body'>
      <div className='center-body'>
        <div className='center-body-head'>
        <h1>Delete Route Information</h1>
        </div>

        <div className='body-middle'>


          <form onSubmit={sendData}>
            <div class="form-group" style={{marginBottom:"20px"}}>
              <h6>Note the Delete Reason</h6>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" required onChange={(e)=>{

                setDnote(e.target.value);

                  }}></textarea>
            </div>

            <div class="form-group mb-2" style={{marginBottom:"12px"}}>
              <h6>Your Admin Name</h6>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"  required onChange={(e)=>{

                  setAname(e.target.value);

                  }}></textarea>
            </div>



            <div className='body-button'>
        <div className='button_handle'>
        <ul>
              <li>
              <button type="submit" className="btn btn-warning"><a href='#' style={{textDecoration:'none',color:'white'}}  
              >Confirm Delete</a></button>
              </li>

              <li>
              <button type="button" class="btn btn-danger" onClick={handleDelete}><a href='/' style={{textDecoration:'none',color:'white'}}>Cancel</a></button>
              </li>

        </ul>
        </div>
      </div>


          </form>


          

        </div>


      </div>

    </div>
  )
}
