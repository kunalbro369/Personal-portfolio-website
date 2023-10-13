import React from 'react'
import { personalInfo } from '../data'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <>
    {personalInfo.map(({title, description,link},index)=>{
        return (
            <li className="info__item" key={index}>
                <span className="info__title">{title}</span>
                <Link to={link} target='_blank'><span className='info__description'>{description}</span></Link>
            </li>
        )
    })}
    </>
  )
}

export default Info
