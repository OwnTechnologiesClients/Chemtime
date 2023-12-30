import React from 'react'
import './CourseTable.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import axios from 'axios';
import { SetCurrentUser } from "../../redux/userSlice";

const CourseTable = ({ mode, tableFields }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleEnroll = async (courseItem) => {
        if (!localStorage.getItem('token')) {
            navigate('/student-login')
        }

        const response = await
            axios({
                method: 'get',
                url: 'https://chemtime-backend-0duz.onrender.com/api/student/get-current-user',
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        console.log(response.data.data);
        const { studentname, contactnumber, dateofbirth, email, city, state, pincode, address, fathername, myfilename } = response.data.data;

        const courseData = {}
        courseData['coursename'] = courseItem[0];
        courseData['courseduration'] = courseItem[2];
        courseData['price'] = courseItem[3];

        if (localStorage.getItem('token')) {
            courseData['studentname'] = studentname;
            courseData['contactnumber'] = contactnumber;
            courseData['dateofbirth'] = dateofbirth;
            courseData['email'] = email;
            courseData['city'] = city;
            courseData['state'] = state;
            courseData['pincode'] = pincode;
            courseData['address'] = address;
            courseData['fathername'] = fathername;
            courseData['filename'] = myfilename;
            dispatch(SetCurrentUser(courseData));
            navigate('/form')
        }
        else {
            navigate('/student-login')
        }
    }


    return (
        <div className='course-table'>
            <div className="dashboard">
                <h1>{mode}</h1>
                <div className="parent-row">
                    <span>Course</span>
                    <span>Class Time</span>
                    <span>Course Duration</span>
                    <span>Price</span>
                    <span>Registration</span>
                </div>
                {
                    tableFields.map((item, index) => {
                        return (
                            <div className="child-row" key={index}>
                                <span>{item[0]}</span>
                                <span>{item[1]}</span>
                                <span>{item[2]}</span>
                                <span>₹ {item[3]}</span>
                                <button onClick={() => handleEnroll(item)}>Enroll Now</button>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default CourseTable