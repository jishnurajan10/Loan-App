import React from 'react'
import './About.css'
import about_img from '../../assets/About.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-right">
            <h3>ABOUT US</h3>
            <h2>THIS IS WHY WE ARE SO AWESOME</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas id explicabo optio, 
              possimus tempore neque quis architecto enim quaerat, tenetur exercitationem illum, 
              officia obcaecati dolor saepe adipisci omnis labore veritatis!</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, 
            our programs prepare aspiring educators to make a meaningful impact in classrooms, 
            schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational 
            leader, our diverse range of programs offers the perfect pathway to achieve your 
            goals and unlock your full potential in shaping the future of education.</p>

        </div>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
         </div>
      
    </div>
  )
}

export default About
