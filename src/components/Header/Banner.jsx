import React from 'react'
import examIllu from '../../assets/Exams-cuate.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className='container row mx-auto my-5'>
        <div className="left-sec col-sm-12 col-lg-6">
            <h1 className="banner-head display-1">Welcome to TalkItEasy</h1>
            <p className="banner-para">Unlock Your Future with English Proficiency for ITI Students</p>
        </div>
        <div className="right-sec col-sm-12 col-lg-6"><img src={examIllu} alt="" /></div>
    </div>
  )
}

export default Banner
