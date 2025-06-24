import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-100 to-purple-100 px-4">
      <div className="relative bg-white p-6 rounded-2xl shadow-lg w-[370px] text-gray-800">
        {/* ✕ Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">About Our Bookstore</h2>

        {/* Welcome */}
        <div className="flex items-center gap-2 mb-1">
          <img src="https://cdn-icons-png.flaticon.com/128/29/29302.png" alt="book" className="w-5 h-5" />
          <h3 className="text-md font-semibold text-gray-700">Welcome to BookStore</h3>
        </div>
        <p className="text-sm mb-3">
          At <span className="font-semibold text-pink-500">BookStore</span>, we believe books are for everyone.
          We offer an inspiring collection that informs, entertains, and sparks curiosity.
        </p>

        {/* Categories */}
        <div className="flex items-center gap-2 mb-1">
          <img src="https://cdn-icons-png.flaticon.com/128/744/744922.png" alt="category" className="w-5 h-5" />
          <h3 className="text-md font-semibold text-gray-700">Categories We Offer</h3>
        </div>
        <p className="text-sm mb-3">
          Find books in <span className="text-purple-600 font-medium">Sports</span> 🏀, 
          <span className="text-purple-600 font-medium"> Story</span> 📖, 
          <span className="text-purple-600 font-medium"> Food</span> 🥗, 
          and <span className="text-purple-600 font-medium"> Music</span> 🎶 — something for every interest!
        </p>

        {/* Free/Paid */}
        <div className="flex items-center gap-2 mb-1">
          <img src="https://cdn-icons-png.flaticon.com/128/709/709790.png" alt="payment" className="w-5 h-5" />
          <h3 className="text-md font-semibold text-gray-700">Free & Paid Books</h3>
        </div>
        <p className="text-sm mb-3">
          Enjoy access to both <span className="text-green-600 font-medium">Free</span> and 
          <span className="text-yellow-600 font-medium"> Paid</span> books to match every reader’s need.
        </p>

        {/* Mission */}
        <div className="flex items-center gap-2 mb-1">
          <img src="https://cdn-icons-png.flaticon.com/128/1006/1006540.png" alt="mission" className="w-5 h-5" />
          <h3 className="text-md font-semibold text-gray-700">Our Mission</h3>
        </div>
        <p className="text-sm mb-5">
          To make reading joyful, accessible, and valuable for everyone — whether you're a student or a casual reader.
        </p>

        {/* Footer */}
        <h3 className="text-center text-sm text-gray-500 font-medium">— By Team BookStore 📚</h3>
      </div>
    </div>
  );
}

export default About;
