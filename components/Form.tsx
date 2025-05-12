"use client";
// py-12
const Form = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-4 rounded-lg flex flex-col items-center justify-center mt-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8 text-center">
                Fill the form to book your trip!
            </h1>

            <form className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
                <div className="space-y-6">
                    {/* Full Name */}
                    <div className="flex items-center gap-4">
                        <label htmlFor="fullname" className="w-80 text-md font-medium text-gray-700">
                            Full Name<span className="text-red-500"> *</span>
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            placeholder="John Doe"
                            required
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
                            placeholder="xyz@gmail.com"
                            required
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
                            placeholder="017********"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Destination */}
                    <div className="flex items-center gap-4">
                        <label htmlFor="destination" className="w-80 text-md font-medium text-gray-700">Destination<span className="text-red-500">* </span></label>
                        <input
                            type="text"
                            name="destination"
                            required
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
                            min={1}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-4">
                        <label htmlFor="date" className="w-80 text-md font-medium text-gray-700">Travel Date<span className="text-red-500"> *</span></label>
                        <input
                            type="date"
                            name="date"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-4 pt-4">
                    <button
                        type="button"
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
        </div >
    )
}

export default Form;
