import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './index.css';

export default function ContactSection() {
    const [state, handleSubmit] = useForm("mqkvjlyd");
    if (state.succeeded) {
        return <p>Thanks for your message, i will read it soon !</p>;
    }
    return (
        <div className='section-contact'>
        <h2 className='section-title contact'>Contact</h2>
        <p>Feel free to contact me 😊 </p>

        <div className='section-contact-content'>
            <div className='left' >
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email" 
                      name="email"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />

                    <label htmlFor="message">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                    <button type="submit" className='contact-submit' disabled={state.submitting}>
                      Submit
                    </button>
                </form>
            </div>
            <div className='right'>
                <h3>Address</h3>
                <p>1234 Main St</p>
                <p>City, State 12345</p>
            </div>
        </div>
        <footer>
            <p>Copyright 2023 Tout Droit Réservé par Erwan Cloux. Lire les mentions légales</p>
        </footer>

        

        </div>
    )
}