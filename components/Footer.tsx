
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 py-1.5 text-center text-sm">
                {new Date().getFullYear()} <span className="font-semibold text-blue-600">Travello</span>. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;