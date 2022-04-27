import { useRef, useState } from 'react'

import './style.scss'
import Phone from '../../img/phone.png'
import Email from '../../img/email.jpeg'

import Address from '../../img/address.png'

import { useContext } from "react";
import { ThemeContext } from "../../context";


const Contact = () => {


    const theme = useContext(ThemeContext)

    const darkMode = theme.state.darkMode;

    const formRef = useRef();
    const [message, setMessage] = useState(false);
    const [buttonClose, setButtonClose] = useState(false);

    const handleClose = () => {
        setButtonClose(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);

    }

    return (
        <div className='contact'>
            <div className="backgro"></div>
            <div className="wrapper">
                <div className="left">
                    <h1 className="title"> let us contact</h1>
                    <div className="info">
                        <div className="info-item">
                            <img src={Phone} alt='' className='icon' />
                            +0460 297 888
                        </div>
                        <div className="info-item">
                            <img src={Email} alt='' className='icon' />
                            sarahwangdk@gmail.com
                        </div>
                        <div className="info-item">
                            <img src={Address} alt='' className='icon' />
                            melbourne, vic
                        </div>
                    </div>

                </div>

                <div className="right">
                    <p className="desc">
                        <b> what is your story?</b>
                        I am not saying Twitter is not a powerful tool, last week I got connected to so many people from Automattic it's not even funny

                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Name' name='user_name' />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows={5} placeholder='Message' name='message' />
                        <button>Submit</button>


                    </form>
                    {
                        // ???
                        message &&
                        <div className={buttonClose ? ("alert" + "-active") : "alter"} >

                            <strong>Thanks!</strong>  I will reply ASAP :)
                            <button onClick={handleClose} className="closebtn" >&times;</button>
                        </div>

                    }

                </div>
            </div>
        </div>
    )
}

export default Contact;