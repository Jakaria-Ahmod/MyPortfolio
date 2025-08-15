import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        () => {
          toast.success('Message sent successfully! 🚀');
          form.current.reset();
        },
        error => {
          toast.error('Something went wrong. Please try again! 😥');
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-200 my-16 lg:my-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-800"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Get In Touch
      </motion.h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-8">
        {/* Full Name & Email */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <label className="block text-base font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full border-2 border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
              placeholder="e.g., Jane Doe"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <label className="block text-base font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border-2 border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
              placeholder="e.g., jane.doe@example.com"
            />
          </motion.div>
        </div>

        {/* Phone & Website */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label className="block text-base font-semibold text-gray-700 mb-2">
              Phone (optional)
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full border-2 border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
              placeholder="e.g., +880 1234-567890"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label className="block text-base font-semibold text-gray-700 mb-2">
              Website (optional)
            </label>
            <input
              type="url"
              name="website"
              className="w-full border-2 border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
              placeholder="e.g., https://your-website.com"
            />
          </motion.div>
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <label className="block text-base font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="comments"
            rows="6"
            required
            className="w-full border-2 border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300 resize-none"
            placeholder="Type your message here..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          className="text-center pt-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-3 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Send Message 🚀
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
