import React from 'react'
import { useNavigate} from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronDoubleLeft } from 'react-bootstrap-icons';
// import { faBold } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    const navigate=useNavigate()
  return (
    <div style={{margin:"20px"}}>
        <h5>Student Record</h5>
        <div className="container mt-6" style={{marginTop:"30px"}}>
        <div className="row justify-content-center">
        <div className="col-md-3">
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td ><text onClick={()=>navigate("/student/1")} style={{cursor:"pointer" }}>Angelin</text></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><text onClick={()=>navigate("/student/2")} style={{cursor:"pointer"}}>Dharshana</text></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><text onClick={()=>navigate("/student/3")} style={{cursor:"pointer"}}>Guru</text></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><text onClick={()=>navigate("/student/4")} style={{cursor:"pointer"}}>Jeeviha</text></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><text onClick={()=>navigate("/student/5")} style={{cursor:"pointer"}}>Nithya</text></td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
        </div>
        <button value="Back" onClick={()=>navigate("/")}><ChevronDoubleLeft size={14}/> Back</button>
    </div>
  )
}

export default Main