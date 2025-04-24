import React from 'react'

function ContactUs() {
  return (
    <div className="bg-[#f4e8d6] min-h-screen p-8 font-serif">
    <a href="#" className="text-sm text-black flex items-center mb-4">
      <span className="mr-2">←</span> Go back
    </a>
    <div className="text-6xl font-bold">
      Here to <span className="relative inline-block">
        <span className="text-transparent stroke-[2px] stroke-black">help</span>
        <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-[#e4532b] -z-10"></span>
      </span>
    </div>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-16">
      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Full name*</label>
          <input type="text" placeholder="Enter your full name…" className="w-full p-2 bg-[#d7cec3] placeholder:text-gray-700" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email address*</label>
          <input type="email" placeholder="Enter your email address…" className="w-full p-2 bg-[#d7cec3] placeholder:text-gray-700" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Contact number</label>
          <input type="text" placeholder="Enter your contact number…" className="w-full p-2 bg-[#d7cec3] placeholder:text-gray-700" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Message*</label>
          <textarea placeholder="Type your message here…" rows="5" className="w-full p-2 bg-[#d7cec3] placeholder:text-gray-700" />
        </div>
        <button className="bg-[#e4532b] text-white px-6 py-2 inline-flex items-center font-medium">
          Send message →
        </button>
      </form>

      <div>
        <h2 className="text-3xl font-bold mb-2">Join our newsletter</h2>
        <p className="mb-4">Add your details and you'll receive our quarterly email, including what’s happening with the wildlife, nature and communities around Lewa House.</p>
        <div>
          <label className="block font-semibold mb-1">Email Address</label>
          <input type="email" placeholder="Enter your email address…" className="w-full p-2 bg-[#d7cec3] placeholder:text-gray-700" />
        </div>
        <button className="mt-4 bg-[#e4532b] text-white px-6 py-2 inline-flex items-center font-medium">
          Sign up →
        </button>
        <div className="mt-8 text-sm">
          <p><strong>For bookings, rates & reservations:</strong> <br /><a href="#" className="underline">Bush and Beyond</a></p>
          <p className="mt-2"><strong>Legal</strong><br />
            <a href="#" className="underline">Terms & Conditions</a> <a href="#" className="underline ml-2">Privacy Policy</a><br />
            <a href="#" className="underline">Cookie Policy</a>
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
