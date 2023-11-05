import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './index.css';
import Magnetic from '../../animations/magnetic';
import Footer from '../footer/footer';
import ContactScene from './contact-3d-scene/contact-scene';

export default function ContactSection() {
    const [state, handleSubmit] = useForm("mqkvjlyd");
    if (state.succeeded) {
         alert('Thanks for your message !')
         window.location = '/'
    }
    return (
        <div className='section-contact'>
          <h2 className='section-title contact contact_ct'>Contact</h2>
          <p className='section-subtitle contact contact_ct'>Feel free to contact me 😊 </p>

          <div className='section-contact-content contact_ct'>
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
                      <Magnetic>
                        <button type="submit" className='contact-submit' disabled={state.submitting}>
                          Submit
                        </button>
                      </Magnetic>
                  </form>
              </div>
              <div className='right'>
                  <ContactScene/>
              </div>
        </div>

        <Footer />
        

        </div>
    )
}