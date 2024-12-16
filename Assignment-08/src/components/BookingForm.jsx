import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", {
      state: { ...form, bookingId: Math.floor(Math.random() * 1000000) },
    });
  };

  return (
    <form className="h-screen" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center gap-4 h-3/4 w-1/4 m-auto my-6 bg-amber-200 rounded-lg">
        <h2 className="text-2xl font-bold">Booking Form</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label>Email:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
        {/* <button className="bg-slate-950 text" type="submit">Submit</button> */}
        
      </div>
    </form>
  );
};

export default BookingForm;
