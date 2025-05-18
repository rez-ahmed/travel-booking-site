"use client";

import { assets } from "../assets"
import Link from "next/link"

const Navbar = () => {
    const { logo } = assets.Image

    return (
        <nav className={`top-0 w-full z-50 bg-gray-900 shadow-md'}`}>
            <div className="max-w-6xl mx-auto py-1 flex justify-between items-center">

                {/* Logo + App Name */}
                <div className="flex flex-row items-center space-x-2 ">
                    <a href="/">
                        <img
                            src={logo}
                            alt="Travel Logo"
                            className="h-[4rem] w-auto rounded-4xl p-1"
                        />
                    </a>
                    <a href="/">
                        <span className="text-2xl font-serif text-gray-200">Travello</span>
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="space-x-7 text-gray-300 font-medium hidden md:flex" >
                    <Link href="/" className="px-3 py-2 rounded-md hover:text-gray-950 hover:bg-blue-100 transition-colors">Home</Link>
                    <Link href="/book-a-trip" className="px-3 py-2 rounded-md hover:text-gray-950 hover:bg-blue-100 transition-colors">Book a Trip</Link>
                    <Link href="/my-bookings" className="px-3 py-2 rounded-md hover:text-gray-950 hover:bg-blue-100 transition-colors">My Bookings</Link>
                    <Link href="/about-us" className="px-3 py-2 rounded-md hover:text-gray-950 hover:bg-blue-100 transition-colors">About us</Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;