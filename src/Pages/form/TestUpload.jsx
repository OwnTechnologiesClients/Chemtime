import React, { useState } from 'react'
import axios from 'axios'

function TestUpload() {
    const [file, setFile] = useState()
    const upload = () => {
        const formData = new FormData()
        formData.append('studentProfile', file)
        console.log("====>>> ");
        axios.post('http://localhost:9000/api/student/upload', formData)
            .then((res) => {
                console.log("---->>>Response:  ");

            })
            .catch(er => {
                console.log("----<<<<<< error: ", er);
            })
        console.log("---->>>Response:  ");
        handleSubmit()

    }

    const handleSubmit = async (e) => {
        console.log("--=-=-=-=->>> AJJAAA");
        e.preventDefault();
        try {
            const response = await axios({
                method: "post",
                url: "http://localhost:9000/api/student/registration-form",

                data: formData,
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (response.data.success) {
                setisFormSaved(true);
                toast.success("Saved Successful", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            } else {
                console.log("----->>>>>  ", response.data);
                toast.warn("Please enter all details", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    return (
        <div>
            <input type='file' onChange={(e) => setFile(e.target.files[0])} />
            <button type='button' onClick={upload}> Upload </button>



        </div>
    )
}

export default TestUpload