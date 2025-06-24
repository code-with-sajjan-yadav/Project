import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="  p-5 rounded-md shadow-md w-[350px]">
        {/* Header with Contact Us and ✕ */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black-500">Contact Us</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-lg font-bold text-white-600 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-3">
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              {...register('name', { required: true })}
              placeholder="Enter your name"
              className="w-full border px-3 py-1 rounded-md text-sm"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Enter your email"
              className="w-full border px-3 py-1 rounded-md text-sm"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Message */}
          <div className="mb-3">
            <label className="block mb-1">Message:</label>
            <textarea
              {...register('message', { required: true })}
              placeholder="Your message"
              rows="3"
              className="w-full border px-3 py-1 rounded-md text-sm"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-1.5 rounded-md hover:bg-pink-700 duration-200 text-sm"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
