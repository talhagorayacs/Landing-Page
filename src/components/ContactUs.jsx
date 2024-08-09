// import React from 'react';
import './ContactUs.css'; // Import the CSS file
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9blpi3j', 'template_d0blpag', form.current, {
        publicKey: '0nzBKNjBzP1YXsww5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact-us" className="h-screen flex flex-col justify-center items-center p-4" data-aos="fade-right">
      <h1 className="text-4xl font-bold mb-4">Contact Uss</h1>
      <div className="flex flex-col items-center p-5 border-2  border-black bg-white shadow-2xl rounded-3xl" style={{ height: 'auto', width: '65%' }}>
        <div className="flex flex-col md:flex-row w-auto bg-white text-black rounded-lg">
          {/* Contact Information */}
          <div className="md:w-1/2 w-full max-w-md p-8 bg-blue-900 text-white flex flex-col justify-center items-center rounded-tl-lg custom-rounded-tr">
            <h2 className="text-3xl font-bold">CONTACT US!</h2>
            <p className="mt-2 text-center">Have questions or feedback? Get in touch with us at <a href="mailto:info@growbiz.net" className="underline">info@growbiz.net</a> - we'd love to hear from you!</p>
          </div>

          {/* Form Inputs */}
          <div className="md:w-1/2 w-full max-w-md p-8 bg-white text-blue-900 flex flex-col rounded-br-lg rounded-bl-lg">
            <h1 className="text-2xl font-bold mb-2 text-black">Let’s Grow Your Business</h1>
            <h4 className="text-lg mb-4 text-black">Do you have a Query to discuss? Our team would love to help</h4>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col h-full">
              <div className="relative mb-4">
                <input type="text" id="name" name="user_name" placeholder="Name" required className="p-3 border-none rounded-lg shadow-sm text-lg w-full pr-10" />
                {/* Add icon for the input */}
                <i className="absolute right-3 top-3 text-gray-500 fa fa-user"></i>
              </div>

              <div className="relative mb-4">
                <input type="email" id="email" name="user_email" placeholder="Email" required className="p-3 border-none rounded-lg shadow-sm text-lg w-full pr-10" />
                {/* Add icon for the input */}
                <i className="absolute right-3 top-3 text-gray-500 fa fa-envelope"></i>
              </div>

              <div className="relative mb-4">
                <textarea id="message" name="message" placeholder="Message" required className="p-3 border-none rounded-lg shadow-sm text-lg w-full pr-10"></textarea>
                {/* Add icon for the textarea */}
                <i className="absolute right-3 top-3 text-gray-500 fa fa-comment"></i>
              </div>

              <button type="submit" value="send" className="mt-4 p-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 text-sm w-full max-w-xs mx-auto">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
