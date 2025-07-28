import React, { useState } from "react";
import backgroundImage from "/images/contact_img.png"; 

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (

      <div className="relative z-10 min-h-screen py-10 mt-20"> {/* mt-20 to offset the navbar */}
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            zIndex: "-1",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for background image */}
        </div>

        <div className="relative z-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Contact Form Section */}
            <div className="w-full max-w-md p-8 mx-auto bg-white bg-opacity-75 rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-600">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="username@example.com"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="contactNumber" className="block text-gray-600">Contact Number</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="(+977)"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-600">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-600">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows="6"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Description Section */}
            <div className="flex flex-col justify-center p-8 bg-white bg-opacity-75 rounded-lg shadow-md">
              <h2 className="mb-4 text-3xl font-bold text-gray-800">Contact Us</h2>
              <p className="mb-6 text-lg text-gray-600">
                We are a leading company providing high-quality services to our clients. Our dedicated
                team ensures to deliver the best results. Feel free to reach out to us with any questions
                or inquiries. We're always happy to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default ContactPage;