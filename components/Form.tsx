"use client";

import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        contact: "",
        destination: "",
        travelerNumber: "",
        date: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    const handleReset = () => {
        setFormData({
            fullname: "",
            email: "",
            contact: "",
            destination: "",
            travelerNumber: "",
            date: "",
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 px-4 rounded-lg flex flex-col items-center justify-center mt-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8 text-center">
                Fill the form to book your trip!
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
                <div className="space-y-6"
                >
                    {/* Full Name */}
                    <div className="flex items-center gap-4">
                        <label htmlFor="fullname" className="w-80 text-md font-medium text-gray-700">
                            Full Name<span className="text-red-500"> *</span>
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            placeholder="Enter Full Name"
                            onChange={handleChange}
                            required
                            value={formData.fullname}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <label htmlFor="email" className="w-80 text-md font-medium text-gray-700">
                            Email<span className="text-red-500"> *</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={handleChange}
                            required
                            value={formData.email}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-center gap-4">
                        <label htmlFor="contact" className="w-80 text-md font-medium text-gray-700">
                            Phone Number<span className="text-red-500"> *</span>
                        </label>
                        <input
                            type="tel"
                            name="contact"
                            placeholder="Enter Contact Number"
                            onChange={handleChange}
                            required
                            value={formData.contact}
                            maxLength={11}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Destination */}
                    <div className="flex items-center gap-4">
                        <label htmlFor="destination" className="w-80 text-md font-medium text-gray-700">
                            Destination<span className="text-red-500">* </span>
                        </label>
                        <input
                            type="text"
                            name="destination"
                            placeholder="Enter your destination"
                            onChange={handleChange}
                            required
                            value={formData.destination}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Travelers */}
                    <div className="flex items-center gap-4">
                        <label htmlFor="travelerNumber" className=" w-80 text-md font-medium text-gray-700">
                            Number of Travelers<span className="text-red-500"> *</span>
                        </label>
                        <input
                            type="number"
                            name="travelerNumber"
                            placeholder="3"
                            onChange={handleChange}
                            min={1}
                            required
                            value={formData.travelerNumber}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-4">
                        <label htmlFor="date" className="w-80 text-md font-medium text-gray-700">
                            Travel Date<span className="text-red-500"> *</span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            onChange={handleChange}
                            required
                            value={formData.date}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-4 pt-4">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md transition"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
