import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      import.meta.env.VITE_API_service_id,
      import.meta.env.VITE_API_template_id,
      form.current,
      import.meta.env.VITE_API_public_key
      )
      .then(
      (result) => {
          toast.success('Message sent successfully!');
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
          console.error('EmailJS Error:', error);
        }
      );
    e.target.reset();
  };

  return (
    <section className="h-screen py-20 px-6 bg-blue-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
        <p className="mt-4 text-gray-600">We'd love to hear from you! Please fill out the form below to reach out.</p>
      </div>
      
      <div className="mt-12 max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        
        {/* Contact Details */}
        <div className="space-y-6">
          <ContactDetail icon={<Mail className="text-blue-600 w-6 h-6" />} text="medisure7@gmail.com" />
          <ContactDetail icon={<Phone className="text-blue-600 w-6 h-6" />} text="+91 7807812757" />
          <ContactDetail icon={<MapPin className="text-blue-600 w-6 h-6" />} text="Phagwara, Punjab" />
        </div>
        
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-6 rounded-lg shadow-lg space-y-4"
        >
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input name="name" type="text" className="w-full mt-1 p-2 border rounded-md focus:border-blue-600 focus:ring-blue-600" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input name="email" type="email" className="w-full mt-1 p-2 border rounded-md focus:border-blue-600 focus:ring-blue-600" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea name="message" rows="4" className="w-full mt-1 p-2 border rounded-md focus:border-blue-600 focus:ring-blue-600" required></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// Reusable Component for Contact Details
function ContactDetail({ icon, text }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="p-2 bg-blue-50 rounded-full">
        {icon}
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}

// Reusable Component for Social Links
function SocialLink({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
      {icon}
    </a>
  );
}
