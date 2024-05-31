import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CaretLeft } from 'react-bootstrap-icons';


const Details = () => {

    const student_details={
        1:{"roll_no":1, "name":"Angelin","dob":"27-03-2005","blood_group":"A1-ve","dept":"BCA"},
        2:{"roll_no":2, "name":"Dharshana","dob":"11-03-2005","blood_group":"O+ve","dept":"B.Tech CS"},
        3:{"roll_no":3, "name":"Guru", "dob":"23-03-2005","blood_group":"B+ve","dept":"B.Sc Maths"},
        4:{"roll_no":4, "name":"Jeeviha","dob":"21-07-2005","blood_group":"B+ve","dept":"B.Sc CS"},
        5:{"roll_no":5, "name":"Nithya","dob":"27-07-2004","blood_group":"AB+ve","dept":"B.Tech AI"}
    }
    const {id}=useParams();
    const student_data=student_details[id]
    const navigate=useNavigate();
  return (
    <div style={{margin:"30px"}}>
        <h5>Personal Details</h5>
        <div className="container mt-6" style={{marginTop:"30px"}}>
        <div className="row justify-content-center">
        <div className="col-md-3">
        <table className="table table-striped table-bordered">
            <thead>
                <tr><th colSpan="2">{student_data.name}</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Roll Number</td>
                    <td>{student_data.roll_no}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{student_data.name}</td>
                </tr>
                <tr>
                    <td>DOB</td>
                    <td>{student_data.dob}</td>
                </tr>
                <tr>
                    <td>Blood Group</td>
                    <td>{student_data.blood_group}</td>
                </tr>
                <tr>
                    <td>Department</td>
                    <td>{student_data.dept}</td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
        </div>
        <button onClick={()=>navigate("/students")}><CaretLeft size={16}/> Back</button>
    </div>
  )
}

export default Details