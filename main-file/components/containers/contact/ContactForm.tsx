"use client";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import sendEmail from '../../../pages/api/send-email'

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const onSubmit = async (e:any) => {
      console.log('Email Data - ',e,formData)
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          alert('Message sent successfully');
        } else {
          alert('Failed to send message');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message');
      }
    };
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        console.log("EVENT - ",value)
        setFormData((prevData) => ({
          ...prevData,
          [id]: value
        }));
      };
      

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="row">
      <div className="col-6">
        <label htmlFor="name">Your Name*</label>
        <input
        id="name"
        className="bg-transparent bor"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleInputChange}
        required={true}
        />
      </div>
      <div className="col-6">
        <label htmlFor="email">Your Email*</label>
        <input
          className="bg-transparent bor"
          id="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required={true}
        />
      </div>
    </div>
    <div className="text-area">
      <label htmlFor="message">Write Message*</label>
      <textarea
        className="bg-transparent bor"
        id="message"
        placeholder="Write Message"
        value={formData.message}
        onChange={handleInputChange}
        required={true}
        />
    </div>
    <div className="btn-two">
      <span className="btn-circle"></span>
      <button type="submit" className="btn-one">
        Send Message{" "}
        <i className="fa-regular fa-arrow-right-long"></i>
      </button>
    </div>
  </form>
  );
};

export default ContactForm;
