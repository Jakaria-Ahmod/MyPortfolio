import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string()
        .min(10, 'Message should be at least 10 characters')
        .required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Submitted:', values);
      alert('Message Sent!');
      resetForm();
    },
  });

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
        Contact Me
      </h2>

      <form
        onSubmit={formik.handleSubmit}
        className="space-y-6 bg-white p-8 shadow-md rounded-lg"
      >
        {/* Name */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Subject of your message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.subject && formik.errors.subject && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
