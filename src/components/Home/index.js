import LogoTitle from '../../assets/images/logo-p.png'
import './index.scss'
import {Link} from 'react-router-dom'
import React,{ useEffect, useState } from 'react'
import Myemoji from '../../assets/images/Myemoji.png'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import resume from '../../assets/resume/resume.pdf'

const Home = () => {

    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray =['a','r','t','h']
    const jobArray =['w','e','b',' ','d','e','v','l','o','p','e','r','.']

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span> 
                <br />
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                
                <h2>Frontend Developer / Backend Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                <a href={resume} target='_blank' className='resume-btn' rel='noopener noreferrer'>RESUME</a>
            </div>
            <img src={Myemoji} className='solid-logo' alt="S" /> 
        </div>
        <Loader type='pacman'/>
        </>
    );
}

export default Home