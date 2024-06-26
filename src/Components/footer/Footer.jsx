import React from 'react'
import logo from '../../assets/logo.png'
import fbicon from '../../assets/icons/facebook.png'
import yticon from '../../assets/icons/youtube.png'
import igicon from '../../assets/icons/igfigmaicon.png'
import checkbox from '../../assets/icons/checkbox.png'
import down from '../../assets/icons/down.png'
import call from '../../assets/call.png'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  const handleTelephoneClick = () => {
    const phoneNumber = 'tel:+918595764714'; 
    window.location.href = phoneNumber;
  };
  return (
    <div>
      <div className='footer'>
        <div className="detail">
          <Link to="/" ><img src={logo} alt="" /></Link><br></br><br></br>
          <div className="message">
            At ASAP Institute (formerly CHEMTIME), our mission is to empower students like you with the knowledge and skills needed to excel in the competitive world of chemistry entrance exams. We understand that every student is unique, and that's why we offer a variety of coaching options to cater to your specific needs and preferences.
          </div>
          <div className="footer-icons">
            <a href="https://www.facebook.com/chmtime?mibextid=ZbWKwL" target='_blank'><img src={fbicon} width={"25vw"} alt="" /></a>
            <a href="https://www.youtube.com/@ASAPCHEMTIME" target='_blank'><img src={yticon} width={"25vw"} alt="" /></a>
            <a href="https://www.instagram.com/asapchemtime?igshid=YmMyMTA2M2Y%3D" target='_blank'><img src={igicon} width={"25vw"} alt="" /></a>

          </div>
        </div>
        <div className="courses">
          <h4>Courses</h4>
          <Link to="#">
            <li>CSIR-NET/JRF</li>
          </Link>
          <Link to="#">
            <li>GATE</li>
          </Link>
          <Link to="#">
            <li>IIT-JAM</li>
          </Link>
          <Link to="#">
            <li>CUET(PG)</li>
          </Link>
          <Link to="#">
            <li>TEST SERIES</li>
          </Link>
          <Link to="#">
            <li>STUDY MATERIAL</li>
          </Link>
        </div>
        <div className="links ">
          <h4>Useful Links</h4>

          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/about">About us</Link>
          </div>
          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="https://blog.chemtime.co.in" target="_blank">Blog</Link>
          </div>
          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/shipping-policy">Shipping Policy</Link>
          </div>
          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/terms-condition">Terms & Condition</Link>
          </div>
          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/privacy-policy">Privacy & Policy</Link>
          </div>
          <div className="link">
            <img src={checkbox} alt="" />
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
          
        </div>
        <div className="box" >
          <img src={call} alt="" onClick={handleTelephoneClick}/>
          <div onClick={handleTelephoneClick}>
            <p className='h1'>For More Details</p>
            <p className='h2'>+91 8595764714 <br></br>+91 7011767872</p>
          </div>
        </div>
      </div>
      <div className='bottom-footer' >
        <div className='bottom'>
          <li><Link to='/onlinecourses/csir-net'>Popular Courses |</Link></li>
          <li><Link to='/contact'>Help Desk |</Link></li>
          <li><Link to='/student-login'>Login</Link></li>
        </div>
        <div className='rights'>
          <p style={{ marginLeft: "-6rem" }}>© 2023 All Rights Reserved. Created with ❤️ by <a href="https://owntechnologies.in/" target='_blank'>OwnTechnologies</a></p>
        </div>
        <div className='smooth-up'>
          <a onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}><img src={down} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer