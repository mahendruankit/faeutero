import React, { forwardRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import Button from '../Common/Button/Button';
import Input from '../Common/Input/Input';
import Textarea from '../Common/Textarea/Textarea';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss';

const Contact = forwardRef((props, ref) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1mk79yb',
        'template_bnstp0w',
        e.target,
        'xP1builJAbOLC5kxC'
      )
      .then(
        (result) => {
          toast('Message sent.', {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section className='contactSection' ref={ref}>
      <h3 className='contactSection__title'>
        <strong>Contact Me</strong>
      </h3>
      <div className='contactSection__avatarContainer'>
        <div className='contactSection__avatar'></div>
      </div>
      <form onSubmit={sendEmail} className='contactMe__form'>
        <div id='Name'>
          <Input
            size='large'
            type='hidden'
            name='from_name'
            value='Ankit Mahendru Contact Me'
          />
          <Input
            size='large'
            placeholder='Name'
            type='text'
            name='to_name'
            required
          />
        </div>

        <div id='Email'>
          <Input
            size='large'
            placeholder='Email Address'
            type='email'
            name='user_email'
            required
          />
        </div>
        <div id='Message'>
          <Textarea
            size='large'
            placeholder='Write a message'
            as='textarea'
            name='message'
            rows='10'
            cols='100'
          />
        </div>
        <div id='Send'>
          <Button
            label='Send'
            size='medium'
            style={{ marginBottom: '1em' }}
            type='submit'
            primary={true}
          ></Button>
        </div>
      </form>
    </section>
  );
});

export default Contact;
