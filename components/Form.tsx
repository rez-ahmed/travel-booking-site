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

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let newErrors: { [key: string]: string } = {};

        // fullname
        if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";

        // email
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) { /// regular expression - regex
            newErrors.email = "Invalid email format";
        }

        // contact
        if (!formData.contact.trim()) {
            newErrors.contact = "Phone number is required";
        } else if (formData.contact.length !== 11) {
            newErrors.contact = "Phone number must be 11 digits"
        }

        // destination
        if (!formData.destination.trim()) newErrors.destination = "Destination is required";

        // traveler number
        if (!formData.travelerNumber.trim() || parseInt(formData.travelerNumber) < 1) {
            newErrors.travelerNumber = "At least 1 traveller is required";
        }

        // date
        if (!formData.date) newErrors.date = "Date is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        console.log("Form Data:", formData);
        alert("Form Submitted successfully");
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
        setErrors({});
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
                    <div>
                        <div className="flex items-center gap-4">
                            <label htmlFor="fullname" className="w-80 text-md font-medium text-gray-700">
                                Full Name<span className="text-red-500"> *</span>
                            </label>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Enter Full Name"
                                onChange={handleChange}
                                value={formData.fullname}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <div className="flex items-center gap-4">
                            <label htmlFor="email" className="w-80 text-md font-medium text-gray-700">
                                Email<span className="text-red-500"> *</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                onChange={handleChange}
                                value={formData.email}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <div className="flex items-center gap-4">
                            <label htmlFor="contact" className="w-80 text-md font-medium text-gray-700">
                                Phone Number<span className="text-red-500"> *</span>
                            </label>
                            <input
                                type="tel"
                                name="contact"
                                placeholder="Enter Contact Number"
                                onChange={handleChange}
                                value={formData.contact}
                                maxLength={11}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
                    </div>

                    {/* Destination */}
                    <div>
                        <div className="flex items-center gap-4">
                            <label htmlFor="destination" className="w-80 text-md font-medium text-gray-700">
                                Destination<span className="text-red-500">* </span>
                            </label>
                            <input
                                type="text"
                                name="destination"
                                placeholder="Enter your destination"
                                onChange={handleChange}
                                value={formData.destination}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
                    </div>

                    {/* Travelers */}
                    <div>
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
                                value={formData.travelerNumber}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        {errors.travelerNumber && <p className="text-red-500 text-sm mt-1">{errors.travelerNumber}</p>}
                    </div>

                    {/* Date */}
                    <div>
                        <div className="flex items-center gap-4">
                            <label htmlFor="date" className="w-80 text-md font-medium text-gray-700">
                                Travel Date<span className="text-red-500"> *</span>
                            </label>
                            <input
                                type="date"
                                name="date"
                                onChange={handleChange}
                                value={formData.date}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
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
