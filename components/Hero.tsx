import Link from "next/link";

const Hero = () => {
    return (
        <section
            className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/homepage_bg.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-yellow-50 text-center px-4 ">
                <h1 className="text-5xl font-bold mb-6 text-white">Welcome to<span className="text-blue-400">Travello</span></h1>
                <Link href="/book-a-trip">
                    <button className="bg-yellow-400 opacity-70 hover:bg-yellow-500 hover:opacity-100 text-black font-semibold py-3 px-6 rounded-md transition-transform duration-300 ease-in-out hover:-translate-x-y-1 hover:scale-110">
                        Book Now
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Hero;