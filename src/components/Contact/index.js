import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () =>{

    const [letterClass,setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    const sendEmail=(event)=>{
        event.preventDefault();

        emailjs
            .sendForm(
                'service_gmail',
                'template_rvxm4yn',
                refForm.current,
                'ksR1zX820IJ8U2syR'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')   
                }
            );
        event.target.reset()
    }

    return (
        <>
           <div className='container contact-page'>
                 <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                       I am actively seeking roles in FullStack, Front-end, and Back-end    development.
                    </p>

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                        type='text' 
                                        name='name' 
                                        placeholder='Name' 
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <input 
                                        type='email' 
                                        name='email' 
                                        placeholder='Email' 
                                        required
                                    
                                    />
                                </li>
                                <li>
                                    <input 
                                        type='text' 
                                        name='subject' 
                                        placeholder='Subject' 
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea 
                                        placeholder='Message'
                                        name='message' 
                                        required>  
                                    </textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                 </div>
                 <div className='info-map'>
                    Parth Adhikari
                    <br/>
                    Delhi, India
                    <br/>
                    <span>parthadhikari1812@gmail.com</span>
                 </div>
                 <div className='map-wrap'>
                    <MapContainer center={[28.476385,77.545793]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[28.476385,77.545793]}>
                            <Popup>Parth lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                 </div>
           </div>
           <Loader type='pacman'/>
        </>
    )
}

export default Contact