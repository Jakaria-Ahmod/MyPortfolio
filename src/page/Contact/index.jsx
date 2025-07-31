// ContactForm.jsx
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {
  window.scrollTo(0, 0);
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6dtzpaa',
        'template_fz0qii9',
        form.current,
        '18VLLnGxilg3YJ3Fw'
      )
      .then(
        result => {
          toast.success('✅ Message sent successfully!');
          form.current.reset();
          console.log(result);
        },
        error => {
          toast.error('❌ Something went wrong. Please try again!');
          console.log(error);
        }
      );
  };
  return (
    <div className="max-w-3xl mx-auto p-6 md:p-12 bg-white rounded-2xl shadow-md my-[100px]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600">
        contacts
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Name "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+880 1234-567890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website (optional)
            </label>
            <input
              type="text"
              name="website"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://your-portfolio.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="comments"
            rows="6"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md cursor-pointer"
          >
            ✉️ Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
