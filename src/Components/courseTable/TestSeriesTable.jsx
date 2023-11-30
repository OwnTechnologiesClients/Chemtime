import React, { useState } from 'react'
import './CourseTable.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import axios from 'axios';
import { SetCurrentUser } from "../../redux/userSlice";
import pdfIcon from '../../assets/icons/pdf.png'
import Loader from '../loaderSpinner/Loader'

const TestSeriesTable = ({ mode, tableFields }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    const handleEnroll = async (courseItem) => {
        if (!localStorage.getItem('token')) {
            navigate('/student-login')
        }
        setIsLoading(true);
        const response = await
            axios({
                method: 'get',
                url: 'https://chemtime-backend.onrender.com/api/student/get-current-user',
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
            {isLoading ? <Loader /> : ""}

            <div className="dashboard">
                <h1>{mode}</h1>
                <div className="parent-row">
                    <span>Course</span>
                    <span>Information</span>
                    <span>Course Duration</span>
                    <span>Price</span>
                    <span>Registration</span>
                </div>
                {
                    tableFields.map((item, index) => {
                        return (
                            <div className="child-row" key={index}>
                                <span>{item[0]}</span>
                                <span ><a download={item[1]}><img src={pdfIcon} alt="" /></a></span>
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

export default TestSeriesTable