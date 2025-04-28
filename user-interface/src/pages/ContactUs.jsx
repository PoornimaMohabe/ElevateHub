import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
  return (
    <div className="bg-[#dbe4f7] min-h-screen p-20 font-serif">
    <a href="#" className="text-sm text-black flex items-center mb-4">
      <span className="mr-2">←</span> Go back
    </a>
    <div className='flex flex-col justify-start  gap-4'>
    <div className="text-3xl font-bold">
    Let’s Connect! 
    </div>
    <p >Have a question, feedback, or an exciting collaboration idea? <br />
We'd love to hear from you. At ElevateHub, we believe communication is key to building great futures together. <br />
Drop us a message and our team will get back to you as soon as possible!</p>
</div>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-16">
      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Full name*</label>
          <input type="text" placeholder="Enter your full name…" className="w-96 p-2  bg-[#c3ddf9] rounded-sm placeholder:text-gray-700" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email address*</label>
          <input type="email" placeholder="Enter your email address…" className="w-96 p-2 bg-[#c3ddf9] rounded-sm placeholder:text-gray-700" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Contact number</label>
          <input type="text" placeholder="Enter your contact number…" className="w-96 p-2 bg-[#c3ddf9] rounded-sm placeholder:text-gray-700" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Message*</label>
          <textarea placeholder="Type your message here…" rows="5" className="w-96 p-2 bg-[#c3ddf9] rounded-sm placeholder:text-gray-700" />
        </div>
        <button className="bg-[#3351e7] text-white px-6 py-2 inline-flex items-center font-medium">
          Send message →
        </button>
      </form>

      <div>
        <h2 className="text-3xl font-bold mb-2">Join our newsletter</h2>
        <p className="mb-4">Stay inspired. Stay connected. Follow us on our social media channels and be part of the ElevateHub movement.</p>
        <div>
          <label className="block font-semibold mb-1">Email Address</label>
          <input type="email" placeholder="Enter your email address…" className="w-full p-2 bg-[#c3ddf9] rounded-sm placeholder:text-gray-700" />
        </div>
        <Link to="/sign-up">
        <button className="mt-4 bg-[#3351e7] text-white px-6 py-2 inline-flex items-center font-medium">
          Sign up →
        </button>
        </Link>
        <div className="mt-8 text-sm">
          
          <p className="mt-2"><strong>Legal</strong><br />
            <a href="#" className="underline">Terms & Conditions</a> <a href="#" className="underline ml-2">Privacy Policy</a><br />
         
          </p>
          <p className="mt-2"><strong>Alternatively contact us at:</strong><br />
            <a href="mailto:info@lewahouse.com" className="text-[#e4532b] underline">info@lewahouse.com</a><br />
            +254 (0)710 791303<br />
            Lewa House Pimbi Ltd.<br />
            P.O. Box 760<br />
            Isiolo 60300<br />
            Kenya
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUs
