import React, { useEffect } from "react";
import "./Form.scss";
import { useRef, useState } from "react";
import logo from "../../assets/logo.png";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRazorpay from "react-razorpay";
import axios from "axios";
import { useSelector } from "react-redux";
import uploadImg from "../../assets/photo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const location = useLocation();
  const currentUser = location?.state?.currentUser || "";
  const isPayment = location?.state?.isPayment || false;

  const inputRef = useRef(null)
  const [image, setImage] = useState("")
  const [file, setFile] = useState()
  const [isFileUpload, setisFileUpload] = useState(false)

  var uploadFileName = ""


  // Save Button Action
  const upload = () => {

    if (isFileUpload === true) {

      const formData = new FormData()
      formData.append('studentProfile', file)

      axios.post('https://backend.chemtime.co.in/api/student/upload', formData)
        .then(res => { })
        .catch(er => console.log("-------", er))

      uploadFileName = file.name
      //console.log("====>>>> Enter", uploadFileName);
      //console.log("====>>>> Enter", isFileUpload);
      setisFormSaved(true);
    } else {
      toast.error("Select Image", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }


  }

  const handleImageClick = () => {
    console.log("====<<<>>>< CLICK");
    inputRef.current.click();

  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log("----->>>>>>>> ", file);
    setisFileUpload(true);
    console.log("===>>> FILE CHANGED  ", isFileUpload);
    //setImage(event.target.files[0])
    setFile(event.target.files[0])
  }

  //   console.log(location.state.currentUser);

  const finalCall = async (xxx) => {
    const result = await axios({
      method: "post",
      url: "https://backend.chemtime.co.in/api/student/get-registration-form",
      data: {
        registrationNo: xxx.registrationNo,
        contact: xxx.contact,
        payment: true,
      },
    });

    toast.success("Payment Successful", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

    setisPayDone(true);

    // localStorage.clear();
    localStorage.removeItem("pFromData");
    localStorage.removeItem("pData");

    // console.log(result.data)

    // setTimeout(() => {
    //   navigate("/history");
    // }, 2000);
  };

  const [isFormSaved, setisFormSaved] = useState(false);
  const [isPayDone, setisPayDone] = useState(false);
  //   const { currentUser } = useSelector((state) => state.users);
  const {
    coursename,
    coursetype,
    courseduration,
    email,
    price,
    studentname,
    contactnumber,
    dateofbirth,
    city,
    state,
    pincode,
    address,
    fathername,
    filename,

  } = currentUser;

  const openParenthesisIndex = coursename?.indexOf("(");
  const closeParenthesisIndex = coursename?.indexOf(")");

  const subjectname = coursename?.slice(
    openParenthesisIndex + 1,
    closeParenthesisIndex
  );

  const handlePrint = (e) => {
    e.preventDefault();
    if (!isFormSaved) {
      toast.warn("Please Save Form First", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      return;
    }
    print();
  };

  let regNo = Math.round(Date.now());
  regNo = regNo.toString();
  regNo = regNo.substring(4, 9);

  var DateFormSubmitted = "";
  var d = new Date();

  DateFormSubmitted +=
    d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

  const [formData, setFormData] = useState({
    registrationnumber: regNo,
    studentProfile: uploadFileName,
    courseduration: courseduration,
    session: "2024-25",
    coursetype: coursetype || "",
    coursename: coursename,
    subject: subjectname,
    studentname: studentname,
    dateofbirth: dateofbirth,
    category: "",
    gender: "",
    fathername: fathername,
    fatheroccupation: "",
    designation: "",
    address: address,
    state: state,
    pincode: pincode,
    phonenumber: "",
    mobilenumber: contactnumber,
    email: email,
    modeofpayment: "",
    knowaboutus: "",
    date: DateFormSubmitted,
    place: city,
    price: price,
    xyearpassing: "",
    xcgpa: "",
    xdivision: "",
    xcollege: "",
    xuniversity: "",
    xiiyearpassing: "",
    xiicgpa: "",
    xiidivision: "",
    xiicollege: "",
    xiiuniversity: "",
    graduationyearpassing: "",
    graduationcgpa: "",
    graduationdivision: "",
    graduationcollege: "",
    graduationuniversity: "",
    postgraduationyearpassing: "",
    postgraduationcgpa: "",
    postgraduationdivision: "",
    postgraduationcollege: "",
    postgraduationuniversity: "",
  });

  const [Razorpay] = useRazorpay();



  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData?.gender);
  };

  // Submit Button Action
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await axios({

        method: "post",
        url: "https://backend.chemtime.co.in/api/student/registration-form",

        data: formData,
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log("---<<<<<>>>>");


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

  const handlePaymen = async (x) => {
    // e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "https://backend.chemtime.co.in/api/v1/phonepe/payment",
        data: {
          name: "vipul",
          amount: x,
          number: "7015129103",
          MUID: "MUID" + Date.now(),
          transactionId: "T" + Date.now(),
        },
      });
      // console.log(response.data.url);
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    // if (!isFormSaved) {
    //   toast.warn("Please Save Form First", {
    //     position: "bottom-right",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: false,
    //     draggable: false,
    //     progress: undefined,
    //   });
    //   return;
    // }

    // let iData = {
    //   registrationNo: regNo,
    //   contact: contactnumber,
    // };

    // let iDataString = JSON.stringify(iData);

    // localStorage.setItem("pData", iDataString);

    // let iFormData = JSON.stringify(formData);

    // localStorage.setItem("pFromData", iFormData);

    // // navigate("/payment", { state: { totalCost: +price } });
    // handlePaymen(+price);

    //----------------------------------------------------------------------

    if (!isFormSaved) {
      toast.warn("Please Save Form First", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      return;
    }
    const response = await axios({
      method: "post",
      url: "https://backend.chemtime.co.in/api/payment/createOrder",
      data: {
        amount: price * 100,
        currency: "INR",
        receipt: "abcd",
        notes: {
          description: "best course",
          language: "DSA",
          access: "lifetime",
        },
      },
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // console.log(response)
    const options = {
      key: "rzp_live_q4KW9y4BBurkJz",
      // key_secret:"VTKjL1ldgDB6F1ir9kE5AdFw",
      amount: response.data.amount,
      currency: "INR",
      name: "ChemTime",
      description: coursename,
      order_id: response.data.id,
      handler: async function (response) {
        console.log(response);
        const res = await axios({
          method: "post",
          url: "https://backend.chemtime.co.in/api/payment/verifyOrder",
          data: {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
          },
          headers: {
            xrazorpaysignature: response.razorpay_signature,
          },
        });

        // console.log(res);

        if (res.data.success) {
          const result = await axios({
            method: "post",
            //url: "https://backend.chemtime.co.in/api/student/get-registration-form",
            url: "https://backend.chemtime.co.in/api/student/get-registration-form",
            data: {
              registrationNo: regNo,
              contact: contactnumber,
              payment: true,
            },
          });
          toast.success("Payment Successful", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });

          setisPayDone(true);

          // console.log(result.data)

          // setTimeout(() => {
          //     navigate('/history');
          // }, 2000);
        }
      },
      prefill: {
        name: "ChemTime",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new Razorpay(options);
    pay.open();

    // console.log(pay);

    razorpayObject.on("payment.failed", function (response) {
      // console.log(response);
      alert("This step of Payment Failed");
    });
  };

  // useEffect(() => {
  //   console.log(isPayment);
  //   console.log(!localStorage.getItem("pData"));
  //   if (!isPayment && currentUser === "") {
  //     navigate("/");
  //   }
  //   if (isPayment && localStorage.getItem("pData")) {
  //     let storedDataString = localStorage.getItem("pData");
  //     let storedData = JSON.parse(storedDataString);

  //     let storedFromData = localStorage.getItem("pFromData");
  //     let formStoredData = JSON.parse(storedFromData);

  //     setFormData((prevData) => ({
  //       ...prevData,
  //       ...formStoredData,
  //     }));

  //     finalCall(storedData);
  //   }
  //   if (isPayment && !localStorage.getItem("pData")) {
  //     navigate("/history");
  //   }
  // }, []);

  return (
    <form className="form-pay">
      <div className="sf-header-parent">
        <div className="sf-header">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="sf-contact-details">
          <p>
            reg. Office: 28 B/7/1, Jia Sarai, Hauz Khas, New Delhi, Delhi 110016
          </p>
          <p>Tel.: +91-8595764714</p>
          <p>E-mail: info@asapchemtime.com</p>
        </div>
      </div>

      <div className="sf-form-parent">
        <div className="sf-register-profile-img-parent">
          <div className="sf-register-field">
            <p className="sf-form-text">Reg. No</p>

            <input
              type="text"
              name="registrationnumber"
              value={formData?.registrationnumber}
            />
          </div>


          <div className="form-profilepic" onClick={handleImageClick}>
            {
              file ? <img src={URL.createObjectURL(file)} alt="" /> : <img src={uploadImg} alt="" />
            }

            <input
              type='file'
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />

            {/* <button type='button' onClick={upload}> Uploadd </button> */}

            {/* <img src={`https://backend.chemtime.co.in/public/${filename}`} /> */}
          </div>


        </div>


        {/* <input type='file' onChange={(e) => {
          setFile(e.target.files[0])
        }
        } />

        <button type='button' onClick={upload}> Uploadd </button> */}
      </div>

      <div className="sf-course-section">
        <div className="sf-course-radio-button-form">
          <label>
            <span>Course Duration: </span>
          </label>
          <label>
            <span>6 Month</span>
            <input
              name="courseduration"
              type="radio"
              value="6 Month"
              checked={formData?.courseduration === "6 Month"}
              onChange={handleChange}

            />
          </label>

          <label>
            <span>1 Year</span>
            <input
              name="courseduration"
              type="radio"
              value="1 Year"
              checked={formData?.courseduration === "1 Year"}
              onChange={handleChange}


            />
          </label>

          <label>
            <span>2 Years</span>
            <input
              name="courseduration"
              type="radio"
              value="2 Years"
              checked={formData?.courseduration === "2 Years"}
              onChange={handleChange}


            />
          </label>
        </div>

        <div className="sf-register-field">
          <p className="sf-form-text">Session: </p>

          <input
            type="text"
            name="session"
            value={formData?.session}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="sf-course-section">
        <div className="sf-course-radio-button-form">
          <label>
            <span>Mode of Study: </span>
          </label>
          <label>
            <span>Demo</span>
            <input
              name="coursetype"
              type="radio"
              value="Demo"
              checked={formData?.coursetype === "Demo"}
              onChange={handleChange}
            // Checking this radio button if the selected option is "Male"
            // checked={selectedOption === "Demo"}
            />
          </label>

          <label>
            <span>Regular</span>
            <input
              name="coursetype"
              type="radio"
              value="Regular"
              // Checking this radio button if the selected option is "Female"
              checked={formData?.coursetype === "Regular"}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Weekend</span>
            <input
              name="coursetype"
              type="radio"
              value="Weekend"
              // Checking this radio button if the selected option is "Other"
              checked={formData?.coursetype === "Weekend"}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Correspondance</span>
            <input
              name="coursetype"
              type="radio"
              value="Correspondance"
              checked={formData?.coursetype === "Correspondance"}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Test Series</span>
            <input
              name="coursetype"
              type="radio"
              value="Test Series"
              checked={formData?.coursetype === "Test Series"}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      {/*---------------------- Name of examination ---------------------- */}
      <div className="sf-name-of-examination">
        <div className="sf-name-of-examination">
          <p>Name of Course</p>

          <input
            type="text"
            name="coursename"
            value={formData?.coursename}
            onChange={handleChange}
          />
        </div>

        <div className="sf-name-of-subject">
          <p>Name of Subject</p>

          <input
            type="text"
            name="subject"
            value={formData?.subject}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/*---------------------- Student Name ---------------------- */}
      <div className="sf-name-of-examination">
        <div className="sf-student-name">
          <p>Name: </p>

          <input
            type="text"
            name="studentname"
            value={formData?.studentname}
            onChange={handleChange} />

        </div>
      </div>

      {/*---------------------- Date of birth ---------------------- */}
      <div className="sf-date-of-birth">
        <div className="sf-date-of-birth">
          <p>Date Of Birth (DD/MM/YY): </p>

          <input type="date" name="dateofbirth" value={formData?.dateofbirth} onChange={handleChange} />
        </div>

        <div className="sf-date-of-birth">
          <p>Category: </p>

          <input
            type="text"
            name="category"
            value={formData?.category}
            onChange={handleChange}
          />
        </div>

        <label>
          <span>Gender: </span>
        </label>
        <label>
          <span>Male</span>
          <input
            name="gender"
            type="radio"
            value="Male"
            // Checking this radio button if the selected option is "Male"
            // checked={selectedOption === "Male"}
            onChange={handleChange}
          />
        </label>

        <label>
          <span>Female</span>
          <input
            name="gender"
            type="radio"
            value="Female"
            // Checking this radio button if the selected option is "Male"
            // checked={selectedOption === "Female"}
            onChange={handleChange}
          />
        </label>
      </div>

      {/*---------------------- Father Name ---------------------- */}
      <div className="sf-name-of-examination">
        <div className="sf-father-name">
          <p>Father Name: </p>

          <input type="text" name="fathername" value={formData?.fathername} onChange={handleChange} />
        </div>
      </div>

      {/*---------------------- Guardians Occupation ---------------------- */}
      <div className="sf-name-of-examination">
        <div className="sf-name-of-examination">
          <p>Guardians Occupation: </p>

          <input
            type="text"
            name="fatheroccupation"
            value={formData?.fatheroccupation}
            onChange={handleChange}
          />
        </div>

        <div className="sf-name-of-subject">
          <p>Designation: </p>

          <input
            type="text"
            name="designation"
            value={formData?.designation}
            onChange={handleChange}
          />
        </div>
      </div>

      {/*---------------------- Address Name ---------------------- */}
      <div className="sf-name-of-examination">
        <div className="sf-father-name">
          <p>Address: </p>

          <input type="text" name="address" value={formData?.address} onChange={handleChange} />
        </div>
      </div>

      {/*---------------------- State - pin - phoneno ---------------------- */}
      <div className="sf-date-of-birth">
        <div className="sf-date-of-birth">
          <p>State: </p>

          <input type="text" name="state" value={formData?.state} onChange={handleChange} />
        </div>

        <div className="sf-date-of-birth">
          <p>Pin: </p>

          <input type="text" name="pincode" value={formData?.pincode} onChange={handleChange} />
        </div>

        <div className="sf-date-of-birth">
          <p>Phone (Res): </p>

          <input
            type="text"
            name="phonenumber"
            value={formData?.phonenumber}
            onChange={handleChange}
          />
        </div>
      </div>

      {/*---------------------- Mobile No / Email ---------------------- */}
      <div className="sf-name-of-examination">
        <div className="sf-name-of-examination">
          <p>Mobile No: </p>

          <input
            type="text"
            name="mobilenumber"
            value={formData?.mobilenumber}
            onChange={handleChange}
          />
        </div>

        <div className="sf-name-of-subject">
          <p>Email: </p>

          <input type="text" name="email" value={formData?.email} onChange={handleChange} />
        </div>
      </div>

      <div className="sf-name-of-examination">
        <div className="sf-name-of-examination">
          <p>Amount: </p>

          <input type="text" name="price" value={formData?.price} onChange={handleChange} />
        </div>
      </div>

      <div className="sf-result-border"></div>

      <div className="sf-result-heading-parent">
        <div className="sf-result-heading">
          <p>Examination</p>
        </div>
        <div>
          <p>Year of Passing</p>
        </div>

        <div>
          <p>% C.G.P.A</p>
        </div>

        <div>
          <p>Division</p>
        </div>

        <div>
          <p>College</p>
        </div>
        <div>
          <p>University/Institution</p>
        </div>
      </div>
      <div className="sf-result-border"></div>

      {/* ///---------- result X --------------------- */}

      <div className="sf-result-fields">
        <div className="sf-marking">
          <p>X</p>
        </div>
        <div>
          <input
            type="text"
            name="xyearpassing"
            value={formData?.xyearpassing}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="xcgpa"
            value={formData?.xcgpa}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="xdivision"
            value={formData?.xdivision}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="xcollege"
            value={formData?.xcollege}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="xuniversity"
            value={formData?.xuniversity}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="sf-result-border-2"></div>

      {/* ///---------- result XI --------------------- */}
      <div className="sf-result-fields">
        <div className="sf-marking">
          <p>XII</p>
        </div>
        <div>
          <input
            type="text"
            name="xiiyearpassing"
            value={formData?.xiiyearpassing}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="xiicgpa"
            value={formData?.xiicgpa}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="xiidivision"
            value={formData?.xiidivision}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="xiicollege"
            value={formData?.xiicollege}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="xiiuniversity"
            value={formData?.xiiuniversity}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="sf-result-border-2"></div>

      {/* ///---------- result Graduation --------------------- */}
      <div className="sf-result-fields">
        <div className="sf-marking">
          <p>Graduation</p>
        </div>
        <div>
          <input
            type="text"
            name="graduationyearpassing"
            value={formData?.graduationyearpassing}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="graduationcgpa"
            value={formData?.graduationcgpa}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="graduationdivision"
            value={formData?.graduationdivision}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="graduationcollege"
            value={formData?.graduationcollege}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="graduationuniversity"
            value={formData?.graduationuniversity}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="sf-result-border-2"></div>

      {/* ///---------- result Post Graduation --------------------- */}
      <div className="sf-result-fields">
        <div className="sf-marking">
          <p>Post Graduation</p>
        </div>
        <div>
          <input
            type="text"
            name="postgraduationyearpassing"
            value={formData?.postgraduationyearpassing}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="postgraduationcgpa"
            value={formData?.postgraduationcgpa}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="postgraduationdivision"
            value={formData?.postgraduationdivision}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="postgraduationcollege"
            value={formData?.postgraduationcollege}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="postgraduationuniversity"
            value={formData?.postgraduationuniversity}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="sf-result-border-2"></div>

      {/*---------------------- Course Mode ---------------------- */}

      <div className="sf-course-section">
        <div className="sf-course-radio-button-form">
          <label>
            <span>Mode Of Payment: </span>
          </label>
          <label>
            <span>Online</span>
            <input
              name="modeofpayment"
              type="radio"
              value="Online"
              // Checking this radio button if the selected option is "Male"
              // checked={selectedOption === "Male"}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Offline</span>
            <input
              name="modeofpayment"
              type="radio"
              value="Offline"
              // Checking this radio button if the selected option is "Female"
              // checked={selectedOption === "Female"}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      {/*---------------------- How did you know about us ---------------------- */}
      <div className="sf-know-about-us">
        <div className="sf-know-about-us">
          <p>How did you know about us? </p>

          <input
            type="text"
            name="knowaboutus"
            value={formData?.knowaboutus}
            onChange={handleChange}
          />
        </div>
      </div>

      {/*---------------------- Registration Procedure  ---------------------- */}
      <div className="sf-registration-procedure">
        <p>Registration Procedure:- </p>
        <p>
          Send your duly signed application form with one photograph and
          original copy of Online/Cash Deposit Slip/Transaction Slip drawn in
          favour of “ASAP CHEM TIME Pvt. Ltd.” payable at New Delhi, to Head.
          Office only as mentioned in the top right corner of this form.
          Students are required to mention their Name, Course and Subject on the
          back side of Demand Draft.
        </p>
      </div>

      {/*---------------------- DECLARATION  ---------------------- */}
      <div className="sf-declaration">
        <p>DECLARATION</p>
        <p>
          I have no objection for my result being published by the ASAP CHEM
          TIME Pvt. Ltd. if I succeed in the entrance examinations. For
          disciplinary action, the decision of the managing body of the
          Institute will be final. Any request for refund/interchange of
          material will not be entertained. The study material supplied to the
          student is our copyright and is meant for the use of student
          himself/herself only. All disputes are subject to Delhi Jurisdiction
          only.
        </p>
        <br></br>
        <p>
          I have read the declaration mention above and information given are
          true to the best of my knowledge.
        </p>
      </div>

      {/*---------------------- Date / place ---------------------- */}
      <div className="sf-date-place-parent">
        <div className="sf-name-of-examination">
          <p>Date</p>

          <input type="text" name="date" value={formData?.date} />
        </div>

        <div className="sf-name-of-subject">
          <p>Place</p>

          <input type="text" name="place" value={formData?.place} onChange={handleChange} />
        </div>
      </div>

      {!isPayDone ? (
        <div className="sf-paynow">
          <button
            className={`button ${!isFormSaved ? "disabled-btn" : ""}`}
            onClick={(
              handlePrint
            )}
          >
            Print As PDF
          </button>
          <button type='button' onClick={

            upload

          }> Save </button>
          <button className={`button ${!isFormSaved ? "disabled-btn" : ""}`} onClick={handleSubmit}>
            Submit
          </button>
          {/* <button
            className={`button ${!isFormSaved ? "disabled-btn" : ""}`}
            onClick={handleSubmit}
          >
            Submit
          </button> */}
        </div>
      ) : (
        <div>
          <div className="after-payment-bar">
            <div className="d2">Payment Amount : ₹ {formData?.price}</div>
            <div className="d1">
              Registration Status : <span className="d3">Successful</span>
            </div>
          </div>
          <div className="download-as-pdf">
            <button className="button" onClick={handlePrint}>
              Download As PDF
            </button>
            <Link className="button-home" to="/">
              Home
            </Link>
          </div>
        </div>
      )}
      <ToastContainer closeButton={false} />
      <WhatsappIcon />
    </form>
  );
}

export default Form;
