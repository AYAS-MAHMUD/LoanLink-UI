import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = Object.fromEntries(data.entries())
    e.currentTarget.reset()
  }

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-extrabold text-center "
      >
        Contact Us
      </motion.h2>

      <p className="text-center text-slate-500 mt-3 max-w-2xl mx-auto">
        We're here to help you with any questions or concerns. Reach out to us via phone, email, or visit our office.
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left info column */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="text-2xl font-bold mb-3">Get in Touch</h3>
          <p className="text-slate-500 mb-8">Have questions about our loan products or need assistance with your application? Our team is here to help you every step of the way.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center">
                <MapPin className="text-sky-600" />
              </div>
              <div>
                <p className="font-semibold ">Our Location</p>
                <p className="text-sm text-slate-500">123 Financial District<br/>New York, NY 10005</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Phone className="text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold ">Phone Number</p>
                <p className="text-sm text-slate-500">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center">
                <Mail className="text-violet-600" />
              </div>
              <div>
                <p className="font-semibold ">Email Address</p>
                <p className="text-sm text-slate-500">support@loanlink.com<br/>info@loanlink.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center">
                <Clock className="text-orange-600" />
              </div>
              <div>
                <p className="font-semibold ">Working Hours</p>
                <p className="text-sm text-slate-500">Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 mt-8 pt-6">
            <p className="font-semibold  mb-3">Follow Us</p>
            <div className="flex items-center gap-3">
              <a className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm" href="#" aria-label="facebook"><FaFacebookF /></a>
              <a className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm" href="#" aria-label="twitter"><FaTwitter /></a>
              <a className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm" href="#" aria-label="instagram"><FaInstagram /></a>
              <a className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm" href="#" aria-label="linkedin"><FaLinkedinIn /></a>
            </div>
          </div>
        </motion.div>

        {/* Right contact form card */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          
          transition={{ duration: 0.45 }}
          className=" rounded-2xl shadow-lg p-8 border border-slate-100"
        >
          <h3 className="text-2xl font-bold  mb-6">Send us a Message</h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium  mb-2">Your Name</label>
              <input name="name" className="w-full rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400" placeholder="John Doe" />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium  mb-2">Email Address</label>
              <input name="email" type="email" className="w-full rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400" placeholder="john@example.com" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium  mb-2">Subject</label>
              <input name="subject" className="w-full rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400" placeholder="How can we help you?" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium  mb-2">Message</label>
              <textarea name="message" rows="5" className="w-full rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400" placeholder="Tell us more about your inquiry..."></textarea>
            </div>

            <div className="md:col-span-2 flex justify-start">
              <button type="submit" className="mt-2 bg-cyan-800 text-white py-3 px-6 rounded-full shadow-md hover:brightness-105">Send Message</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
